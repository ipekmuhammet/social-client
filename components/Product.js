import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { connect } from 'react-redux'

import productExample from '../assets/product-example.png'

const Product = ({ data: { name, price } }) => {

    const onClick = () => {

    }

    return (
        <TouchableOpacity style={styles.container} onPress={onClick}>

            <View style={styles.child}>
                <Image source={productExample} style={styles.productImage} />
            </View>

            <View style={styles.child}>
                <Text style={styles.productName}>{name}</Text>
            </View>

            <View style={styles.child}>
                <Text style={styles.productPrice}>{'₺' + price}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: RFPercentage(1),
        margin: RFPercentage(1),
        borderWidth: 1,
        borderColor: '#EFEFEF',
        borderRadius: RFPercentage(2)
    },
    child: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    productImage: {
        width: RFPercentage(10),
        height: RFPercentage(10)
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

}

export default connect(null, mapDispatchToProps)(Product)