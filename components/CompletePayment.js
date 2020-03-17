import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

const CompletePaymentComponent = ({ cart }) => {
    const products = Object.values(cart)
    const totalPrice = products.reduce((previousValue, currentValue) => previousValue + parseFloat(currentValue.price), 0).toFixed(2)

    const onCompletePaymentClick = () => {
        console.log('click')
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
    completePaymentContainer: { position: 'absolute', bottom: 0, width: '100%', height: 65, backgroundColor: '#4CAB51', flexDirection: 'row' },
    completePaymentButton: { flex: 1, padding: 20, backgroundColor: '#3D8B40', alignItems: 'center', justifyContent: 'center' },
    completePaymentText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
    totalPriceContainer: { flex: 2, justifyContent: 'center' },
    totalPriceText: { color: 'white', fontSize: 18, padding: 12, fontWeight: 'bold' }
})

const mapStateToProps = ({
    reducer1: {
        cart
    }
}) => ({
    cart
})

export default connect(mapStateToProps)(CompletePaymentComponent)
