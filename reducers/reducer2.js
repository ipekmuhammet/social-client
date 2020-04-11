import { SAVE_CARD, DELETE_CARD } from '../actions/actions2'
import { SET_USER } from '../actions/actions4'

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
        case SET_USER: return Object.assign({}, state, { addresses: action.payload.user.addresses })
        case SAVE_CARD: {
            state.cards.push(action.payload.card)
            return Object.assign({}, state, { cards: [...state.cards] })
        }
        case DELETE_CARD: {
            state.cards.splice(state.cards.indexOf(state.cards.find(card => card.id === action.payload.cardId)), 1)
            return Object.assign({}, state, { cards: [...state.cards] })
        }
        default: return Object.assign({}, state, action.payload)
    }
}