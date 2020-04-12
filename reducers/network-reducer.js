import { SET_NETWORK_STATUS } from '../actions/network-actions'

const INITIAL_STATE = {
    status: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_NETWORK_STATUS: Object.assign({}, state, action.payload)
        default: return state
    }
}