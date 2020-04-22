export const SET_CONNECTION_POPUP_STATE = 'SET_CONNECTION_POPUP_STATE'
export const NEED_TO_LOGIN_POPUP_STATE = 'NEED_TO_LOGIN_POPUP_STATE'
export const SET_ROOT_NAVIGATION = 'SET_ROOT_NAVIGATION'
export const SET_MESSAGE_POPUP_REF = 'SET_MESSAGE_POPUP_REF'

export const setMessagePopupRef = (messagePopupRef) => {
    return (dispatch) => {
        dispatch({
            type: SET_MESSAGE_POPUP_REF,
            payload: {
                messagePopupRef
            }
        })
    }
}

export const setRootNavigation = (navigation) => {
    return (dispatch) => {
        dispatch({
            type: SET_ROOT_NAVIGATION,
            payload: {
                navigation
            }
        })
    }
}

export const setConnectionPopupState = (connectionPopupState) => {
    return (dispatch) => {
        dispatch({
            type: SET_CONNECTION_POPUP_STATE,
            payload: {
                connectionPopupState
            }
        })
    }
}

export const setNeedToLoginPopupState = (needToLoginPopupState) => {
    return (dispatch) => {
        dispatch({
            type: NEED_TO_LOGIN_POPUP_STATE,
            payload: {
                needToLoginPopupState
            }
        })
    }
}