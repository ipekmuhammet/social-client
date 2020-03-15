import { getProductById } from '../data/api'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

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

export const removeProduct = (productId) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_PRODUCT,
            payload: {
                productId
            }
        })
    }
}