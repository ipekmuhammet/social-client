import { SAVE_CARD, DELETE_CARD, DELETE_ADDRESS, SAVE_ADDRESS, SET_SELECTED_ADDRESS, SET_SELECTED_CARD, SET_PAYMENT_TYPE } from '../actions/actions2'
import { SET_INITIAL_DATAS, LOGOUT } from '../actions/actions4'
import { MAKE_ORDER } from '../actions/actions1'

const INITIAL_STATE = {
    paymentType: 0,
    cards: [
        { id: '0', type: 'visa', cardLabel: 'Visa Card', cardNumber: '4766620000000001', type: 'visa' },
        { id: '1', type: 'mastercard', cardLabel: 'Master Card', cardNumber: '5504720000000003', type: 'mastercard' }
    ],
    addresses: [],
    selectedCard: null,
    selectedAddress: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case MAKE_ORDER: return Object.assign({}, state, { selectedCard: null, selectedAddress: null })

        case LOGOUT: return Object.assign({}, state, { addresses: [] })

        case SET_INITIAL_DATAS: return Object.assign({}, state, { addresses: action.payload.user.addresses })

        case SAVE_CARD: {
            state.cards.push(action.payload.card)
            return Object.assign({}, state, { cards: [...state.cards] })
        }

        case DELETE_CARD: {
            state.cards.splice(state.cards.indexOf(state.cards.find(card => card.id === action.payload.cardId)), 1)
            return Object.assign({}, state, { cards: [...state.cards] })
        }

        case DELETE_ADDRESS:
        case SAVE_ADDRESS:
        case SET_SELECTED_ADDRESS:
        case SET_SELECTED_CARD:
        case SET_PAYMENT_TYPE: return Object.assign({}, state, action.payload)

        default: return state
    }
}