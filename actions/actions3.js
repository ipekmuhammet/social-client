export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY'

export const setSelectedCategory = (selectedCategory) => {
    return (dispatch) => {
        dispatch({
            type: SET_SELECTED_CATEGORY,
            payload: {
                selectedCategory
            }
        })
    }
}