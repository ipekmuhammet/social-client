import axios from 'axios'
import { SERVER_URL } from 'react-native-dotenv'

export const CLEAR_CART = 'CLEAR_CART'
export const DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY'
export const INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY'
export const MAKE_ORDER = 'MAKE_ORDER'

export const clearCart = (token) => (dispatch) => {
  if (token) {
    axios.delete(`${SERVER_URL}/user/cart`).then(({ status }) => {
      if (status === 200) {
        dispatch({
          type: CLEAR_CART,
        })
      }
    })
  } else {
    dispatch({
      type: CLEAR_CART,
    })
  }
}

export const makeOrder = (selectedCard, selectedAddress, cb) => (dispatch) => {
  const body = { card: selectedCard, address: selectedAddress }

  axios.post(`${SERVER_URL}/user/order`, body).then(({ status }) => {
    if (status === 200) {
      cb()
      dispatch({
        type: MAKE_ORDER,
      })
    }
  }).catch((reason) => {
    dispatch({
      type: 'DO_NOT_HANDLE',
    })
  })
}

export const decreaseProductQuantity = (productId) => (dispatch) => {
  axios.delete(`http://192.168.1.102:3000/product/${productId}`).then(({ data, status }) => {
    if (status === 200) {
      dispatch({
        type: DECREASE_PRODUCT_QUANTITY,
        payload: data,
      })
    }
  })
}

export const increaseProductQuantity = (productId) => (dispatch) => {
  axios.get(`http://192.168.1.102:3000/product/${productId}`).then(({ data, status }) => {
    if (status === 200) {
      dispatch({
        type: INCREASE_PRODUCT_QUANTITY,
        payload: data,
      })
    }
  })
}
