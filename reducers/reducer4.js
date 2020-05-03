import { SET_INITIAL_DATAS, SET_USER, LOGOUT } from '../actions/actions4'

const INITIAL_STATE = {
  categories: [],
  products: [],
  user: {},
  token: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_INITIAL_DATAS:
    case SET_USER:
    case LOGOUT: return { ...state, ...action.payload }
    default: return state
  }
}
