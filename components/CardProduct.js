import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { removeProduct } from '../actions/actions1'

import productExample from '../assets/product-example.png'

class CardProduct extends Component {

    state = {
        countOfProduct: 1
    }

    onIncreaseClick = () => {
        this.setState({ countOfProduct: this.state.countOfProduct + 1 })
    }

    onDecreaseClick = () => {
        this.state.countOfProduct <= 1 ? this.props.removeProduct(this.props.data.Id) : this.setState({ countOfProduct: this.state.countOfProduct - 1 })
    }

    render() {
        const { name, price } = this.props.data
        const { countOfProduct } = this.state

        return (
            <View style={styles.container}>

                <View style={styles.child} />

                <View style={styles.child}>
                    <Image style={styles.productImage} source={productExample} />
                </View>

                <View style={styles.child} />

                <View style={[styles.child, styles.flex2, styles.column]}>
                    <View style={styles.child}>
                        <Text>{name}</Text>
                    </View>
                    <View style={styles.child}>
                        <Text>{'₺ ' + price}</Text>
                    </View>
                </View>

                <View style={styles.child} />

                <View style={[styles.child, styles.column]}>
                    <View style={styles.child} />
                    <View style={[styles.child, styles.row]}>

                        <TouchableOpacity onPress={this.onDecreaseClick} style={[styles.child, styles.button]}>
                            <Text>{'-'}</Text>
                        </TouchableOpacity>

                        <View style={styles.child}>
                            <Text>{countOfProduct}</Text>
                        </View>

                        <TouchableOpacity onPress={this.onIncreaseClick} style={[styles.child, styles.button]}>
                            <Text>{'+'}</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.child} />
                </View>

                <View style={styles.child} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 6
    },
    child: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flex2: {
        flex: 3
    },
    column: {
        flexDirection: 'column',
        display: 'flex'
    },
    row: {
        flexDirection: 'row',
        display: 'flex'
    },
    productImage: {
        width: 64,
        height: 64
    },
    button: {
        borderWidth: 1,
        borderColor: '#CDCDCD',
        padding: 4
    }
})

const mapDispatchToProps = {
    removeProduct
}

export default connect(null, mapDispatchToProps)(CardProduct)
