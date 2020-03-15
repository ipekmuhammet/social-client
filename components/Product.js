import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { connect } from 'react-redux'

import { addProduct } from '../actions/actions1'

import productExample from '../assets/product-example.png'

const Product = ({ data: { ID, name, price }, addProduct }) => {

    const onClick = () => {
        addProduct(ID)
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.addProductButton} onPress={onClick}>
                <Ionicons name={'md-add'} size={36} color={'#30FF30'} />
            </TouchableOpacity>

            <View style={styles.child}>
                <Image source={productExample} style={styles.productImage} />
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
        borderWidth: 1,
        borderColor: '#CDCDCD',
        borderRadius: RFPercentage(2)
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
        top: 5,
        right: 5
    },
    productImage: {
        width: RFPercentage(16),
        height: RFPercentage(16)
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