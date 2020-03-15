import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/actions1'

const INITIAL_STATE = {
    cart: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_PRODUCT: return Object.assign({}, state, { cart: Object.assign({}, state.cart, action.payload) })
        case REMOVE_PRODUCT: {
            delete state.cart[action.payload.productId]
            return Object.assign(state, { cart: Object.assign({}, state.cart) })
        }
        default: return state
    }
}