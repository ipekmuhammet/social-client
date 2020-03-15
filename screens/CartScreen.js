import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import CardProduct from '../components/CardProduct'

class CartScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={Object.values(this.props.cart)}
                    renderItem={({ item }) => <CardProduct data={item} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1 }
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
