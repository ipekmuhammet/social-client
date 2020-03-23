import { SET_INITIAL_DATAS } from '../actions/actions4'

const INITIAL_STATE = {
	categories: [],
	products: []
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_INITIAL_DATAS: return Object.assign({}, state, action.payload)

		default: return state
	}
}