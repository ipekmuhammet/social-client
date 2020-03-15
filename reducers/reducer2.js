import { getProducts } from '../data/api'

const INITIAL_STATE = {
    products: getProducts()
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: return Object.assign({}, state, action.payload)
    }
}