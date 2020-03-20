import React from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { decreaseProductCount, increaseProductCount } from '../actions/actions1'

import { getProductImage } from '../data/api'

const CardProduct = ({ data: { Id, categoryId, name, price, count }, decreaseProductCount, increaseProductCount }) => (
    <View style={styles.container}>

        <View style={styles.child} />

        <View style={styles.child}>
            <Image style={styles.productImage} source={getProductImage(categoryId, Id)} />
        </View>

        <View style={styles.child} />

        <View style={[styles.child, styles.flex2, styles.column]}>
            <View style={styles.child}>
                <Text numberOfLines={3}>{name}</Text>
            </View>
            <View style={styles.child}>
                <Text numberOfLines={2}>{'₺ ' + price}</Text>
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
