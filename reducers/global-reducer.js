import { SET_CONNECTION_POPUP_STATE, NEED_TO_LOGIN_POPUP_STATE } from '../actions/global-actions'

const INITIAL_STATE = {
    connectionPopupState: false,
    needToLoginPopupState: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CONNECTION_POPUP_STATE:
        case NEED_TO_LOGIN_POPUP_STATE: return Object.assign({}, state, action.payload)
        default: return state
    }
}