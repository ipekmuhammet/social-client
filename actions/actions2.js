import { AsyncStorage } from 'react-native'
import axios from 'axios'

export const SET_PAYMENT_TYPE = 'SET_PAYMENT_TYPE',
    SAVE_CARD = 'SAVE_CARD',
    DELETE_CARD = 'DELETE_CARD',
    SAVE_ADDRESS = 'SAVE_ADDRESS',
    DELETE_ADDRESS = 'DELETE_ADDRESS',
    SET_SELECTED_CARD = 'SET_SELECTED_CARD',
    SET_SELECTED_ADDRESS = 'SET_SELECTED_ADDRESS'

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

export const saveCard = (card, token, navigation) => {
    return (dispatch) => {
        //  axios.put('http://192.168.1.102:3000/user/save-card', { card }, { headers: { Authorization: token } })
        //      .then(({ status, data }) => {
        //          if (status === 200) {
        dispatch({
            type: SAVE_CARD,
            payload: {
                card: {
                    id: Math.random(),
                    ...card
                }
                // card: data
            }
        })
        navigation.goBack()
        //        }
        //    })
    }
}

export const deleteCard = (cardId, token) => {
    return (dispatch) => {
        //  axios.put('http://192.168.1.102:3000/user/delete-card', { id: cardId }, { headers: { Authorization: token } })
        //      .then(({ status }) => {
        //          if (status === 200) {
        dispatch({
            type: DELETE_CARD,
            payload: {
                cardId
            }
        })
        //        }
        //    })
    }
}

export const saveAddress = (address, token) => {
    return (dispatch) => {
        axios.put('http://192.168.1.102:3000/user/add-address', { open_address: address }, { headers: { Authorization: token } })
            .then(({ status, data }) => {
                if (status === 200) {
                    // AsyncStorage.setItem('user', JSON.stringify(data)) // User serverda güncellenince, güncellenenen tüm user'ı geri dönüyor.
                    dispatch({
                        type: SAVE_ADDRESS,
                        payload: {
                            addresses: data.addresses
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
                    // AsyncStorage.setItem('user', JSON.stringify(data)) // User serverda güncellenince, güncellenenen tüm user'ı geri dönüyor.

                    dispatch({
                        type: DELETE_ADDRESS,
                        payload: {
                            addresses: data.addresses
                        }
                    })
                }
            })
    }
}

export const setSelectedCard = (selectedCard, navigation) => {
    return (dispatch) => {
        dispatch({
            type: SET_SELECTED_CARD,
            payload: {
                selectedCard
            }
        })
        console.log(navigation.state)
        navigation.goBack('completePayment')
    }
}

export const setSelectedAddress = (selectedAddress, navigation) => {
    return (dispatch) => {
        dispatch({
            type: SET_SELECTED_ADDRESS,
            payload: {
                selectedAddress
            }
        })
        navigation.goBack('completePayment')
    }
}