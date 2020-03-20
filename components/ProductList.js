import React from 'react'
import { View, FlatList } from 'react-native'

import Product from './Product'
import EmptyProduct from './EmptyProduct'

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns)

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns)
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true })
        numberOfElementsLastRow++
    }

    return data;
}

const ProductList = ({ products }) => (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
        <FlatList
            data={formatData(products, 3)}
            scrollEnabled={true}
            keyExtractor={item => item.Id}
            renderItem={({ item }) => item.empty ? <EmptyProduct /> : <Product data={item} />}
            numColumns={3} />
    </View>
)

export default ProductList