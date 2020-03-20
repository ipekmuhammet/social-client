import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import CardProduct from '../components/CardProduct'
import CompletePayment from '../components/CompletePayment'

const CartScreen = ({ cart, refreshCard, navigation }) => {
    const products = Object.values(cart)

    if (products.length > 0) {
        return (
            <View style={styles.container}>
                <FlatList
                    key={refreshCard}
                    data={products}
                    keyExtractor={item => 'cart' + item.Id}
                    renderItem={({ item }) => <CardProduct key={item.Id} data={item} />}
                />
                <CompletePayment navigation={navigation} />
            </View>
        )
    } else {
        return (
            <View style={styles.centeredContainer}>
                <Text>Empty Cart!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    centeredContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }
})

const mapStateToProps = ({
    reducer1: {
        cart,
        refreshCard
    }
}) => ({
    cart,
    refreshCard
})

export default connect(mapStateToProps)(CartScreen)
