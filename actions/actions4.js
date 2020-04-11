import { AsyncStorage } from 'react-native'
import axios from 'axios'

export const SET_INITIAL_DATAS = 'SET_INITIAL_DATAS', SET_USER = 'SET_USER', LOGOUT = 'LOGOUT'

const getCategories = () => axios.get('http://192.168.1.102:3000/categories').then(({ data }) => data)

const getProducts = () => axios.get('http://192.168.1.102:3000/products').then(({ data }) => data)

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

export const login = (token, user, navigation) => {
	return (dispatch) => {
		AsyncStorage.multiSet([['token', token], ['user', JSON.stringify(user)]]).then((res) => {
			dispatch({
				type: SET_USER,
				payload: {
					user,
					token
				}
			})

			navigation.navigate('Loading')
		})
	}
}

export const logout = (navigation) => {
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
			navigation.navigate('Welcome')
		})
	}
}