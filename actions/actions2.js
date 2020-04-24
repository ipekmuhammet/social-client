import { AsyncStorage } from 'react-native'
import axios from 'axios'
import { SERVER_URL } from 'react-native-dotenv'

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

export const saveCard = (card, cb) => {
    return (dispatch) => {
        //  axios.put(`${SERVER_URL}/user/card`, { card })
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
        cb()
        //        }
        //    })
    }
}

export const deleteCard = (cardToken) => {
    return (dispatch) => {
        //  axios.delete(`${SERVER_URL}/user/card`, { id: cardId })
        //      .then(({ status }) => {
        //          if (status === 200) {
        dispatch({
            type: DELETE_CARD,
            payload: {
                cardToken
            }
        })
        //        }
        //    })
    }
}

export const saveAddress = (address, details) => {
    const body = {
        openAddress: address,
        address_title: details.addressTitle,
        building_no: details.buildingNo,
        floor: details.floor,
        apt_no: details.aptNo,
        directions: details.directions
    }

    return (dispatch) => {
        axios.post(`${SERVER_URL}/user/address`, body)
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

export const deleteAddress = (addressId) => {
    return (dispatch) => {
        axios.delete(`${SERVER_URL}/user/address/${addressId}`)
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

export const setSelectedCard = (selectedCard, cb) => {
    return (dispatch) => {
        dispatch({
            type: SET_SELECTED_CARD,
            payload: {
                selectedCard
            }
        })
        cb()
    }
}

export const setSelectedAddress = (selectedAddress, cb) => {
    return (dispatch) => {
        dispatch({
            type: SET_SELECTED_ADDRESS,
            payload: {
                selectedAddress
            }
        })
        cb()
    }
}