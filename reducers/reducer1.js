import { ADD_PRODUCT, DECREASE_PRODUCT_COUNT, INCREASE_PRODUCT_COUNT, MAKE_ORDER } from '../actions/actions1'

const INITIAL_STATE = {
    cart: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MAKE_ORDER: return action.payload.status ? { cart: {} } : state

        case ADD_PRODUCT: {
            const productId = Object.keys(action.payload)[0]

            if (state.cart[productId]) {
                state.cart[productId].count += 1
                return Object.assign({}, { cart: Object.assign({}, state.cart) })
            } else {
                action.payload[productId].count = 1
                return Object.assign({}, state, { cart: Object.assign({}, state.cart, action.payload) })
            }
        }

        case DECREASE_PRODUCT_COUNT: {
            if (state.cart[action.payload.productId].count <= 1) {
                delete state.cart[action.payload.productId]
            } else {
                state.cart[action.payload.productId].count -= 1
            }

            return Object.assign({}, { cart: Object.assign({}, state.cart) })
        }

        case INCREASE_PRODUCT_COUNT: {
            state.cart[action.payload.productId].count += 1
            return Object.assign({}, { cart: Object.assign({}, state.cart) })
        }
        
        default: return state
    }
}