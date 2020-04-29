import axios from 'axios'
import { SERVER_URL } from 'react-native-dotenv'

export const CLEART_CART = 'DECREASE_PRODUCT_QUANTITY'
export const DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY'
export const INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY'
export const MAKE_ORDER = 'MAKE_ORDER'

export const clearCart = (token) => {
	return (dispatch) => {
		if (token) {
			axios.delete(`${SERVER_URL}/user/cart`).then(({ status }) => {
				if (status === 200) {
					dispatch({
						type: CLEART_CART
					})
				}
			})
		} else {
			dispatch({
				type: CLEART_CART
			})
		}
	}
}

export const makeOrder = (selectedCard, selectedAddress, cb) => {
	return (dispatch) => {
		const body = { card: selectedCard, address: selectedAddress }

		axios.post(`${SERVER_URL}/user/order`, body).then(({ status }) => {
			if (status === 200) {
				cb()
				dispatch({
					type: MAKE_ORDER
				})
			}
		}).catch((reason) => {
			dispatch({
				type: 'DO_NOT_HANDLE'
			})
			console.log(reason)
		})
	}
}

export const decreaseProductQuantity = (productId) => {
	return (dispatch) => {
		axios.delete(`http://192.168.1.102:3000/product/${productId}`).then(({ data, status }) => {
			if (status === 200) {
				dispatch({
					type: DECREASE_PRODUCT_QUANTITY,
					payload: data
				})
			}
		})
	}
}

export const increaseProductQuantity = (productId) => {
	return (dispatch) => {
		axios.get(`http://192.168.1.102:3000/product/${productId}`).then(({ data, status }) => {
			if (status === 200) {
				dispatch({
					type: INCREASE_PRODUCT_QUANTITY,
					payload: data
				})
			}
		})
	}
}