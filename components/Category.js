import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { connect } from 'react-redux'

import productExample from '../assets/product-example.png'

const Category = ({ data: { Id, name } }) => {

    const onClick = () => {
        console.log('product click')
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onClick}>

            <View style={[styles.child, styles.productImageContainer]}>
                <Image source={productExample} style={styles.productImage} />
            </View>

            <View style={styles.child}>
                <Text style={styles.productName}>{name}</Text>
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
        zIndex: -1
    },
    child: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    productImageContainer: {
        borderWidth: 1,
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

}

export default connect(null, mapDispatchToProps)(Category)