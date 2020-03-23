import axios from 'axios'

export const SET_INITIAL_DATAS = 'SET_INITIAL_DATAS'

const getCategories = () => axios.get('http://192.168.1.102:3000/user/categories').then(({ data }) => data)

const getProducts = () => axios.get('http://192.168.1.102:3000/user/products').then(({ data }) => data)

export const setInitialDatas = () => {
	return (dispatch) => {
		Promise.all([getCategories(), getProducts()]).then(res => {
			axios.get('http://192.168.1.102:3000/user/categories').then(({ data }) => [
				dispatch({
					type: SET_INITIAL_DATAS,
					payload: {
						categories: res[0],
						products: res[1]
					}
				})
			])
		})
	}
}