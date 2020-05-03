export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY'

export const setSelectedCategory = (selectedCategory) => (dispatch) => {
  dispatch({
    type: SET_SELECTED_CATEGORY,
    payload: {
      selectedCategory,
    },
  })
}
