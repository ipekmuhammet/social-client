import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { connect } from 'react-redux'

import { addProduct } from '../actions/actions1'
import { getProductImage } from '../data/api'


const Product = ({ data: { Id, categoryId, name, price }, addProduct }) => {

    const onClick = () => {
        addProduct(Id)
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={onClick} style={styles.addProductButton}>
                <Text style={styles.addProductIcon}>+</Text>
            </TouchableOpacity>

            <View style={[styles.child, styles.productImageContainer]}>
                <Image source={getProductImage(categoryId, Id)} resizeMode={'contain'} style={styles.productImage} />
            </View>

            <View style={styles.child}>
                <Text style={styles.productName}>{name}</Text>
            </View>

            <View style={styles.child}>
                <Text style={styles.productPrice}>{'₺ ' + price}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: RFPercentage(1),
        margin: RFPercentage(1),
        zIndex: -1,
        backgroundColor: 'transparent'
    },
    child: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    addProductButton: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: -1 * RFPercentage(1.2),
        right: -1 * RFPercentage(1.2),
        zIndex: 1,
        borderRadius: 4
    },
    addProductIcon: {
        color: '#5837C2',
        fontSize: 32
    },
    productImageContainer: {
        borderWidth: .4,
        borderColor: '#CDCDCD',
        borderRadius: RFPercentage(2)
    },
    productImage: {
        width: RFPercentage(14),
        height: RFPercentage(14),
        margin: 12
    },
    productName: {
        fontSize: RFPercentage(3),
        fontWeight: '300',
        color: '#707070',
        textAlign: 'center',
        justifyContent: 'center'
    },
    productPrice: {
        fontSize: RFPercentage(3),
        fontWeight: '300',
        color: '#7070D5',
        textAlign: 'center',
        justifyContent: 'center'
    }
})

const mapDispatchToProps = {
    addProduct
}

export default connect(null, mapDispatchToProps)(Product)