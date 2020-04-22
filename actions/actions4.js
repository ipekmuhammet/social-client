import { AsyncStorage } from 'react-native'
import axios from 'axios'
import { SERVER_URL } from 'react-native-dotenv'

export const SET_INITIAL_DATAS = 'SET_INITIAL_DATAS'
export const SET_USER = 'SET_USER'
export const LOGOUT = 'LOGOUT'
export const UPDATE_PROFILE = 'UPDATE_PROFILE'

const getCategories = () => axios.get(`${SERVER_URL}/categories`).then(({ data }) => data)

const getProducts = () => axios.get(`${SERVER_URL}/products`).then(({ data }) => data)

const getCart = (token) => axios.get(`${SERVER_URL}/user/cart`, { headers: { Authorization: token } }).then(({ data }) => data)

const getPaymentCards = (token) => axios.get(`${SERVER_URL}/user/list-cards`, { headers: { Authorization: token } }).then(({ data }) => data)

export const updateProfile = (body, cb) => {
	return (dispatch) => {
		axios.put(`${SERVER_URL}/user/profile`, body)
			.then(({ data, status }) => {
				if (status === 200) {
					dispatch({
						type: SET_USER,
						payload: {
							user: data
						}
					})
					cb()
				}
			})
	}
}

export const setInitialDatas = () => {
	return (dispatch) => {
		// AsyncStorage.removeItem('cart')
		AsyncStorage.multiGet(['token', 'user', 'cart']).then(vals => {
			if (vals[0][1]) {
				Promise.all([getCategories(), getProducts(), getCart(vals[0][1]), getPaymentCards(vals[0][1])]).then(res => {
					dispatch({
						type: SET_INITIAL_DATAS,
						payload: {
							categories: res[0],
							products: res[1],
							token: vals[0][1],
							user: JSON.parse(vals[1][1]),
							cart: res[2],
							cards: res[3].cardDetails
						}
					})
				})
			} else {
				Promise.all([getCategories(), getProducts()]).then(res => {
					dispatch({
						type: SET_INITIAL_DATAS,
						payload: {
							categories: res[0],
							products: res[1],
							token: vals[0][1],
							user: JSON.parse(vals[1][1]),
							cart: JSON.parse(vals[2][1])
						}
					})
				})
			}
		}).catch((err) => console.log(err))
	}
}

export const login = (body, popupRef, cb) => {
	return (dispatch) => {
		axios.post(`${SERVER_URL}/login`, body).then(({ status, data }) => {
			if (status === 200) {
				console.log(data.user)
				AsyncStorage.multiSet([['token', data.token], ['user', JSON.stringify(data.user)]]).then((res) => {
					dispatch({
						type: SET_USER,
						payload: {
							user: data.user,
							token: data.token
						}
					})
					cb()
				})
			}
		}).catch((err) => {
			popupRef.showMessage({ message: 'Wrong GSM or password' })
		})
	}
}

export const register = (body, cb) => {
	return (dispatch) => {
		axios.post(`${SERVER_URL}/register`, body).then(({ status, data }) => {
			if (status === 200) {
				AsyncStorage.multiSet([['token', data.token], ['user', JSON.stringify(data.user)]]).then(() => {
					dispatch({
						type: SET_USER,
						payload: {
							user: data.user,
							token: data.token
						}
					})
					cb()
				}).catch((err) => {
					console.log(err)
				})
			}
		})
	}
}

export const logout = () => {
	return (dispatch) => {
		AsyncStorage.multiRemove(['token', 'user']).then(vals => {
			dispatch({
				type: LOGOUT,
				payload: {
					// categories: [],
					// products: [],
					user: {},
					token: null
				}
			})
		})
	}
}