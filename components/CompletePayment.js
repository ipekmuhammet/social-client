import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { makeOrder } from '../actions/actions1'

class CompletePaymentComponent extends React.PureComponent {

    onCompletePaymentClick = () => {
        const { completable, cart, token, paymentType, navigation, makeOrder, selectedCard, selectedAddress, kartRef, addressRef } = this.props

        if (completable) {
            if (selectedCard && selectedAddress) {
                    makeOrder(cart, token, selectedCard, selectedAddress, () => {
                        navigation.navigate('thanksScreen')
                    })
            } else {
                if (!selectedAddress) {
                    addressRef.showMessage({ message: '' })
                } else {
                    kartRef.showMessage({ message: '' })
                }
            }
        } else {
            navigation.navigate('completePayment')
        }
    }

    render() {
        const products = Object.values(this.props.cart)
        const totalPrice = products.reduce((previousValue, currentValue) => previousValue + parseFloat(currentValue.price) * currentValue.count, 0).toFixed(2)
        return (
            <View style={styles.completePaymentContainer}>
                <View style={styles.totalPriceContainer}>
                    <Text style={styles.totalPriceText}>
                        {`Toplam: ${totalPrice} TL`}
                    </Text>
                </View>

                <TouchableOpacity onPress={this.onCompletePaymentClick} style={styles.completePaymentButton}>
                    <Text style={styles.completePaymentText}>SİPARİŞ VER</Text>
                </TouchableOpacity>

            </View>
        )
    }
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
    totalPriceContainer: { flex: 2, justifyContent: 'center' },
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
        paymentType,
        selectedCard,
        selectedAddress
    },
    reducer4: {
        token
    },
    networkReducer: {
        networkStatus
    }
}) => ({
    cart,
    paymentType,
    selectedCard,
    selectedAddress,
    token
})

const mapDispatchToProps = {
    makeOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(CompletePaymentComponent)
