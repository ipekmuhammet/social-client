import { ADD_PRODUCT, DECREASE_PRODUCT_QUANTITY, INCREASE_PRODUCT_QUANTITY, MAKE_ORDER } from '../actions/actions1'
import { SET_INITIAL_DATAS } from '../actions/actions4'

const INITIAL_STATE = {
    cart: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SET_INITIAL_DATAS: return Object.assign({}, { cart: Object.assign({}, action.payload.cart) })

        case MAKE_ORDER: return action.payload.status ? { cart: {} } : state

        case ADD_PRODUCT: {
            const productId = Object.keys(action.payload)[0]

            if (state.cart[productId]) {
                state.cart[productId].quantity += 1
                return Object.assign({}, { cart: Object.assign({}, state.cart) })
            } else {
                action.payload[productId].quantity = 1
                return Object.assign({}, state, { cart: Object.assign({}, state.cart, action.payload) })
            }
        }

        case DECREASE_PRODUCT_QUANTITY: {
            if (state.cart[action.payload.productId].quantity <= 1) {
                delete state.cart[action.payload.productId]
            } else {
                state.cart[action.payload.productId].quantity -= 1
            }

            return Object.assign({}, { cart: Object.assign({}, state.cart) })
        }

        case INCREASE_PRODUCT_QUANTITY: {
            state.cart[action.payload.productId].quantity += 1
            return Object.assign({}, { cart: Object.assign({}, state.cart) })
        }
        
        default: return state
    }
}