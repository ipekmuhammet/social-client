import React, { Component } from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import CardProduct from '../components/CardProduct'

class CartScreen extends Component {
    render() {
        if (Object.values(this.props.cart).length > 0) {
            return (
                <View style={styles.container}>
                    <FlatList
                        data={Object.values(this.props.cart)}
                        keyExtractor={item => 'cart' + item.ID}
                        renderItem={({ item }) => <CardProduct data={item} />}
                    />
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
        cart
    }
}) => ({
    cart
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)
