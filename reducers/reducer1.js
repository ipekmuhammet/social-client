import { ADD_PRODUCT, DECREASE_PRODUCT_COUNT, INCREASE_PRODUCT_COUNT } from '../actions/actions1'

const INITIAL_STATE = {
    cart: {},
    refreshCard: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            const productId = Object.keys(action.payload)[0]

            if (state.cart[productId]) {
                state.cart[productId].count += 1
                return Object.assign({}, { cart: Object.assign({}, state.cart), refreshCard: !state.refreshCard })
            } else {
                action.payload[productId].count = 1
                return Object.assign({}, state, { cart: Object.assign({}, state.cart, action.payload), refreshCard: !state.refreshCard })
            }
        }
        case DECREASE_PRODUCT_COUNT: {
            if (state.cart[action.payload.productId].count <= 1) {
                delete state.cart[action.payload.productId]
            } else {
                state.cart[action.payload.productId].count -= 1
            }

            return Object.assign({}, { cart: Object.assign({}, state.cart), refreshCard: !state.refreshCard })
        }
        case INCREASE_PRODUCT_COUNT: {
            state.cart[action.payload.productId].count += 1
            return Object.assign({}, { cart: Object.assign({}, state.cart), refreshCard: !state.refreshCard })
        }
        default: return state
    }
}