import { SET_CONNECTION_POPUP_STATE, NEED_TO_LOGIN_POPUP_STATE, SET_ROOT_NAVIGATION } from '../actions/global-actions'

const INITIAL_STATE = {
    connectionPopupState: false,
    needToLoginPopupState: false,
    navigation: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ROOT_NAVIGATION:
        case SET_CONNECTION_POPUP_STATE:
        case NEED_TO_LOGIN_POPUP_STATE: return Object.assign({}, state, action.payload)
        default: return state
    }
}