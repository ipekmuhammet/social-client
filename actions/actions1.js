import axios from 'axios'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DECREASE_PRODUCT_COUNT = 'DECREASE_PRODUCT_COUNT'
export const INCREASE_PRODUCT_COUNT = 'INCREASE_PRODUCT_COUNT'
export const MAKE_ORDER = 'MAKE_ORDER'

export const makeOrder = (cart) => {
	return (dispatch) => {
		const body = { cart }
		axios.post('http://192.168.1.102:3000/user/makeOrder', body).then(() => {
			dispatch({
				type: MAKE_ORDER,
				payload: {
					status: true
				}
			})
		}).catch((reason) => {
			console.log('err', reason)
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
		axios.get(`http://192.168.1.102:3000/user/productById?id=${productId}`).then(({ data }) => {
			dispatch({
				type: ADD_PRODUCT,
				payload: {
					[productId]: data
				}
			})
		})
	}
}

export const decreaseProductCount = (productId) => {
	return (dispatch) => {
		dispatch({
			type: DECREASE_PRODUCT_COUNT,
			payload: {
				productId
			}
		})
	}
}

export const increaseProductCount = (productId) => {
	return (dispatch) => {
		dispatch({
			type: INCREASE_PRODUCT_COUNT,
			payload: {
				productId
			}
		})
	}
}