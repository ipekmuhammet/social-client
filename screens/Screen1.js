import React from 'react'
import { View, StyleSheet } from 'react-native'

import ProductList from '../components/ProductList'

const Screen1 = () => (
    <View style={styles.container}>
        <ProductList />
    </View>
)

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }
})

export default Screen1