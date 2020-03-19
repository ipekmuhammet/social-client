import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { decreaseProductCount, increaseProductCount } from '../actions/actions1'

import productExample from '../assets/product-example.png'

const CardProduct = ({ data: { Id, name, price, count }, decreaseProductCount, increaseProductCount }) => {
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

                    <TouchableOpacity onPress={() => { decreaseProductCount(Id) }} style={[styles.child, styles.button]}>
                        <Text>{'-'}</Text>
                    </TouchableOpacity>

                    <View style={styles.child}>
                        <Text>{count}</Text>
                    </View>

                    <TouchableOpacity onPress={() => { increaseProductCount(Id) }} style={[styles.child, styles.button]}>
                        <Text>{'+'}</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.child} />
            </View>

            <View style={styles.child} />
        </View>
    )
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
    decreaseProductCount,
    increaseProductCount
}

export default connect(null, mapDispatchToProps)(CardProduct)
