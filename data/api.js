import products from './products.json'

export const getProducts = () => products

export const getProductById = (Id) => products.find(product => product.ID === Id)