import { SET_PAYMENT_TYPE } from '../actions/actions2'

const INITIAL_STATE = {
    paymentType: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PAYMENT_TYPE: return Object.assign({}, state, { paymentType: action.payload.paymentType })
        default: return state
    }
}