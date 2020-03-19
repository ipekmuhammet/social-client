import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import CardProduct from '../components/CardProduct'
import CompletePayment from '../components/CompletePayment'

class CartScreen extends React.Component {

    render() {
        const { cart, navigation } = this.props
        const products = Object.values(cart)

        if (products.length > 0) {
            return (
                <View style={styles.container}>
                    <FlatList
                        data={products}
                        keyExtractor={item => 'cart' + item.Id}
                        renderItem={({ item }) => <CardProduct data={item} />}
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
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    centeredContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' }
})

const mapStateToProps = ({
    reducer1: {
        cart,
        refresh
    }
}) => ({
    cart,
    refresh
})

export default connect(mapStateToProps)(CartScreen)
