import { getProductById } from '../data/api'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DECREASE_PRODUCT_COUNT = 'DECREASE_PRODUCT_COUNT'
export const INCREASE_PRODUCT_COUNT = 'INCREASE_PRODUCT_COUNT'

export const addProduct = (productId) => {
    return (dispatch) => {
        dispatch({
            type: ADD_PRODUCT,
            payload: {
                [productId]: getProductById(productId)
            }
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