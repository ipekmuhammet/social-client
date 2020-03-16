import React from 'react'
import { View, FlatList } from 'react-native'

import Product from './Product'

const ProductList = ({ products }) => (
    <View style={{ flex: 1 }}>
        <FlatList
            data={products}
            scrollEnabled={true}
            keyExtractor={item => item.Id}
            renderItem={({ item }) => <Product data={item} />}
            numColumns={3} />
    </View>
)

export default ProductList