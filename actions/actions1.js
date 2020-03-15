export const ADD_PRODUCT = 'ADD_PRODUCT'

export const addProduct = (productID) => {
    return (dispatch) => {
        dispatch({
            type: ADD_PRODUCT,
            payload: {
                [productID]: productID
            }
        })
    }
}