import { AsyncStorage } from 'react-native'
import axios from 'axios'

export const SET_INITIAL_DATAS = 'SET_INITIAL_DATAS', SET_USER = 'SET_USER'

const getCategories = (token) => axios.get('http://192.168.1.102:3000/user/categories', { headers: { Authorization: token } }).then(({ data }) => data)

const getProducts = (token) => axios.get('http://192.168.1.102:3000/user/products', { headers: { Authorization: token } }).then(({ data }) => data)

export const addAddress = (address, token) => {
	return (dispatch) => {

		axios.put('http://192.168.1.102:3000/user/add-address', { open_address: address }, { headers: { Authorization: token } })
			.then(({ status, data }) => {
				if (status === 200) {
					AsyncStorage.setItem('user', JSON.stringify(data))

					dispatch({
						type: SET_USER,
						payload: {
							user: data
						}
					})
				}
			})
	}
}

export const deleteAddress = (addressId, token) => {
	return (dispatch) => {
		axios.put('http://192.168.1.102:3000/user/delete-address', { _id: addressId }, { headers: { Authorization: token } })
			.then(({ status, data }) => {
				if (status === 200) {
					AsyncStorage.setItem('user', JSON.stringify(data))

					dispatch({
						type: SET_USER,
						payload: {
							user: data
						}
					})
				}
			})
	}
}

export const setInitialDatas = () => {
	return (dispatch) => {
		AsyncStorage.multiGet(['token', 'user']).then(vals => {
			Promise.all([getCategories(vals[0][1]), getProducts(vals[0][1])]).then(res => {
				dispatch({
					type: SET_INITIAL_DATAS,
					payload: {
						categories: res[0],
						products: res[1],
						token: vals[0][1],
						user: JSON.parse(vals[1][1])
					}
				})
			})
		})
	}
}

export const logout = (navigation) => {
	return (dispatch) => {
		AsyncStorage.multiRemove(['token', 'user']).then(vals => {
			dispatch({
				type: SET_INITIAL_DATAS,
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