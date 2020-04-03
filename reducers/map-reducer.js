const INITIAL_STATE = {
    region: {},
    address: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (state) {
        default: return Object.assign({}, state, action.payload)
    }
}