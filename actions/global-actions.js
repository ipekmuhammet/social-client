export const SET_CONNECTION_POPUP_STATE = 'SET_CONNECTION_POPUP_STATE', NEED_TO_LOGIN_POPUP_STATE = 'NEED_TO_LOGIN_POPUP_STATE'

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