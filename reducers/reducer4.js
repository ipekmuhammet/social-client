import { SET_INITIAL_DATAS, SET_USER } from '../actions/actions4'

const INITIAL_STATE = {
	categories: [],
	products: [],
	user: {},
	token: null
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default: return Object.assign({}, state, action.payload)
	}
}