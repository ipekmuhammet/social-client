import { AsyncStorage } from 'react-native'
import axios from 'axios'
import { SERVER_URL } from 'react-native-dotenv'

export const SET_INITIAL_DATAS = 'SET_INITIAL_DATAS', SET_USER = 'SET_USER', LOGOUT = 'LOGOUT'

const getCategories = () => axios.get(`${SERVER_URL}/categories`).then(({ data }) => data)

const getProducts = () => axios.get(`${SERVER_URL}/products`).then(({ data }) => data)

export const setInitialDatas = () => {
	return (dispatch) => {
		Promise.all([getCategories(), getProducts()]).then(res => {
			dispatch({
				type: SET_INITIAL_DATAS,
				payload: {
					categories: res[0],
					products: res[1]
				}
			})
		})

		//	AsyncStorage.multiGet(['token', 'user']).then(vals => {
		//		Promise.all([getCategories(vals[0][1]), getProducts(vals[0][1])]).then(res => {
		//			dispatch({
		//				type: SET_INITIAL_DATAS,
		//				payload: {
		//					categories: res[0],
		//					products: res[1],
		//					token: vals[0][1],
		//					user: JSON.parse(vals[1][1])
		//				}
		//			})
		//		})
		//	})
	}
}

export const login = (body, popupRef, cb) => {
	return (dispatch) => {
		axios.post(`${SERVER_URL}/login`, body).then(res => {
			if (res.status === 200) {
				AsyncStorage.multiSet([['token', token], ['user', JSON.stringify(user)]]).then((res) => {
					dispatch({
						type: SET_USER,
						payload: {
							user,
							token
						}
					})
					cb()
				})
			} else {
				Alert.alert('err1', JSON.stringify(res)) // TODO
			}
		}).catch((err) => {
			console.log('err', err)
			popupRef.showMessage({ message: '' })
		})
	}
}

export const logout = (cb) => {
	return (dispatch) => {
		AsyncStorage.multiRemove(['token', 'user']).then(vals => {
			dispatch({
				type: LOGOUT,
				payload: {
					categories: [],
					products: [],
					user: {},
					token: null
				}
			})
			cb()
		})
	}
}