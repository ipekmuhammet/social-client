import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { makeOrder } from '../actions/actions1'

const CompletePaymentComponent = ({ completable, cart, paymentType, navigation, makeOrder }) => {
    const products = Object.values(cart)
    const totalPrice = products.reduce((previousValue, currentValue) => previousValue + parseFloat(currentValue.price) * currentValue.count, 0).toFixed(2)

    const onCompletePaymentClick = () => {
        if (completable) {
            if (paymentType === 0)
                navigation.navigate('onlinePaymentScreen')
            else
                makeOrder(cart, navigation)
        } else {
            navigation.navigate('completePayment')
        }
    }

    return (
        <View style={styles.completePaymentContainer}>
            <View style={styles.totalPriceContainer}>
                <Text style={styles.totalPriceText}>
                    {`Toplam: ${totalPrice} TL`}
                </Text>
            </View>
            <TouchableOpacity onPress={onCompletePaymentClick} style={styles.completePaymentButton}>
                <Text style={styles.completePaymentText}>SİPARİŞ VER</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    completePaymentContainer: {
        position: 'absolute', bottom: 0, width: '100%', height: RFValue(65, 600),
        backgroundColor: '#4CAB51', flexDirection: 'row'
    },
    completePaymentButton: {
        flex: 1, padding: RFValue(20, 600),
        backgroundColor: '#3D8B40', alignItems: 'center', justifyContent: 'center'
    },
    completePaymentText: { color: 'white', fontSize: RFValue(18, 600), fontWeight: 'bold' },
    totalPriceContainer: { flex: RFValue(2, 600), justifyContent: 'center' },
    totalPriceText: {
        color: 'white', fontSize: RFValue(18, 600),
        padding: RFValue(12, 600), fontWeight: 'bold'
    }
})

const mapStateToProps = ({
    reducer1: {
        cart
    },
    reducer2: {
        paymentType
    }
}) => ({
    cart,
    paymentType
})

const mapDispatchToProps = {
    makeOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(CompletePaymentComponent)
