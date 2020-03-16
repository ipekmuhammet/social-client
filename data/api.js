import products from './products.json'
import categories from './categories.json'

export const getCategories = () => categories

export const getProductsByCategoryId = (categoryId) => products.filter(product => product.categoryId === categoryId)

export const getProductById = (Id) => products.find(product => product.Id === Id)