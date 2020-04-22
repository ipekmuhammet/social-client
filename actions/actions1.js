import { AsyncStorage } from 'react-native'
import axios from 'axios'
import { SERVER_URL } from 'react-native-dotenv'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY'
export const INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY'
export const MAKE_ORDER = 'MAKE_ORDER'

export const makeOrder = (selectedCard, selectedAddress, cb) => {
	return (dispatch) => {
		const body = { card: selectedCard, address: selectedAddress }
		axios.post(`${SERVER_URL}/user/order`, body).then(() => {
			cb()

			dispatch({
				type: MAKE_ORDER,
				payload: {
					status: true
				}
			})
		}).catch((reason) => {
			dispatch({
				type: MAKE_ORDER,
				payload: {
					status: false
				}
			})
		})
	}
}

export const addProduct = (productId) => {
	return (dispatch) => {
		axios.get(`http://192.168.1.102:3000/product/${productId}`).then(({ data }) => {
			dispatch({
				type: ADD_PRODUCT,
				payload: {
					[productId]: data
				}
			})
		})
	}
}

export const decreaseProductQuantity = (productId) => {
	return (dispatch) => {
		dispatch({
			type: DECREASE_PRODUCT_QUANTITY,
			payload: {
				productId
			}
		})
	}
}

export const increaseProductQuantity = (productId) => {
	return (dispatch) => {
		dispatch({
			type: INCREASE_PRODUCT_QUANTITY,
			payload: {
				productId
			}
		})
	}
}