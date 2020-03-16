import React from 'react'
import { FlatList} from 'react-native'
import { connect } from 'react-redux'

import Product from './Product'

const ProductList = ({ products }) => (
    <FlatList
        data={products}
        scrollEnabled={true}
        keyExtractor={item => item.ID}
        renderItem={({ item }) => <Product data={item} />}
        numColumns={3} />
)

const mapStateToProps = ({
    reducer2: {
        products
    }
}) => ({
    products
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
