import products from './products.json'
import images from './images'

export const getProductsByCategoryId = (categoryId) => products.filter(product => product.categoryId === categoryId)

export const getProductById = (Id) => products.find(product => product.Id === Id)

export const getProductImage = (categoryId, productId) => images[categoryId][productId]

export const getCategoryImage = (categoryId) => images['category'][categoryId]