export const SET_PAYMENT_TYPE = 'SET_PAYMENT_TYPE'

export const setPaymentType = (paymentType) => {
    return (dispatch) => {
        dispatch({
            type: SET_PAYMENT_TYPE,
            payload: {
                paymentType
            }
        })
    }
}