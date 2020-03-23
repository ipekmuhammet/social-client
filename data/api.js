import images from './images'

export const getProductImage = (categoryId, productId) => images[categoryId][productId]

export const getCategoryImage = (categoryId) => images['category'][categoryId]