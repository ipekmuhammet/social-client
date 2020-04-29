import { DECREASE_PRODUCT_QUANTITY, INCREASE_PRODUCT_QUANTITY, MAKE_ORDER, CLEART_CART } from '../actions/actions1'
import { SET_INITIAL_DATAS } from '../actions/actions4'

const INITIAL_STATE = {
    cart: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SET_INITIAL_DATAS: return Object.assign({}, { cart: Object.assign({}, action.payload.cart) })

        case MAKE_ORDER:
        case CLEART_CART: return { cart: {} }

        case DECREASE_PRODUCT_QUANTITY: {
            state.cart[action.payload._id].quantity = action.payload.quantity ?? state.cart[action.payload._id].quantity - 1
            if (state.cart[action.payload._id].quantity <= 0) {
                delete state.cart[action.payload._id]
                return Object.assign({}, { cart: Object.assign({}, state.cart) })
            } else {
                return Object.assign({}, { cart: Object.assign({}, state.cart) })
            }
        }

        case INCREASE_PRODUCT_QUANTITY: {
            if (state.cart[action.payload._id]) {
                state.cart[action.payload._id].quantity = action.payload.quantity ?? state.cart[action.payload._id].quantity + 1
                return Object.assign({}, { cart: Object.assign({}, state.cart) })
            } else {
                return Object.assign({}, {
                    cart: Object.assign({}, {
                        ...state.cart,
                        [action.payload._id]: {
                            ...action.payload,
                            quantity: 1
                        }
                    })
                })
            }
        }

        default: return state
    }
}