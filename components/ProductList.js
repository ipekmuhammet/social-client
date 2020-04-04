import React from 'react'
import { FlatList } from 'react-native'

import Product from './Product'
import EmptyProduct from './EmptyProduct'

const formatData = (data, numColumns) => {
	const numberOfFullRows = Math.floor(data.length / numColumns)

	let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns)
	while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
		data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true })
		numberOfElementsLastRow++
	}

	return data
}

const renderListItem = ({ item }) => item.empty ? <EmptyProduct /> : <Product data={item} />

const ProductList = ({ products }) => (
	<FlatList
		style={{ flex: 1, margin: 6, backgroundColor: '#F5F5F5' }}
		data={formatData(products, 3)}
		removeClippedSubviews={true}			// Performance
		windowSize={36}							// Performance
		initialNumToRender={36}					// Performance
		// maxToRenderPerBatch={24}				// Performance
		// updateCellsBatchingPeriod={100}		// Performance
		scrollEnabled={true}
		showsVerticalScrollIndicator={false}
		keyExtractor={item => item.id}
		renderItem={renderListItem}
		numColumns={3} />
)

export default ProductList