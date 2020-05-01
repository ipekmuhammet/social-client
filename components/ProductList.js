import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { FlatList, StyleSheet } from 'react-native'

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
		style={styles.list}
		data={formatData(products, 3)}
		removeClippedSubviews={true}			// Performance
		windowSize={36}							// Performance
		initialNumToRender={36}					// Performance
		// maxToRenderPerBatch={24}				// Performance
		// updateCellsBatchingPeriod={100}		// Performance
		scrollEnabled={true}
		showsVerticalScrollIndicator={false}
		keyExtractor={item => item._id}
		renderItem={renderListItem}
		numColumns={3} />
)

const styles = StyleSheet.create({
	list: { flex: 1, margin: RFValue(6, 600), backgroundColor: '#F5F5F5' }
})

export default ProductList