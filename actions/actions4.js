import { AsyncStorage } from 'react-native'
import axios from 'axios'

export const SET_INITIAL_DATAS = 'SET_INITIAL_DATAS'

const getCategories = (token) => axios.get('http://192.168.1.102:3000/user/categories', { headers: { Authorization: token } }).then(({ data }) => data)

const getProducts = (token) => axios.get('http://192.168.1.102:3000/user/products', { headers: { Authorization: token } }).then(({ data }) => data)

export const setInitialDatas = () => {
	return (dispatch) => {
		AsyncStorage.getItem('token').then(token => {
			Promise.all([getCategories(token), getProducts(token)]).then(res => {
				dispatch({
					type: SET_INITIAL_DATAS,
					payload: {
						categories: res[0],
						products: res[1]
					}
				})
			})
		})
	}
}