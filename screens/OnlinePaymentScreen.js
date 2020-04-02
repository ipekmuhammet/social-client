import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'
import { connect } from 'react-redux'

import FloatingInput from 'react-native-floating-labels'
import { Ionicons } from '@expo/vector-icons'

import { makeOrder } from '../actions/actions1'

class OnlinePaymentScreen extends React.PureComponent {

    state = {
        cardNumber: '4444 4444 4444 4444',
        expirationDate: '09/23',
        CVC2: '333'
    }

    makeOrder = () => {
        this.props.makeOrder(this.props.cart, this.props.navigation)
    }

    render() {

        const products = Object.values(this.props.cart)
        const totalPrice = products.reduce((previousValue, currentValue) => previousValue + parseFloat(currentValue.price) * currentValue.count, 0).toFixed(2)

        return (
            <View style={styles.container}>

                <View style={styles.paymentHeader}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.totalPriceText}>Ödeme Tutarı</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.totalPrice}>{`${totalPrice} TL`}</Text>
                    </View>
                </View>


                <View style={styles.cardInformationContainer}>
                    <View style={styles.inputContainer}>
                        <FloatingInput
                            labelStyle={styles.labelInput}
                            inputStyle={styles.input}
                            style={styles.formInput}
                            onChangeText={(cardNumber) => this.setState({ cardNumber })}
                            value={this.state.cardNumber}>Kart Numarası *</FloatingInput>
                    </View>

                    <View style={styles.rowInputContainer}>
                        <View style={styles.inputContainerChild}>
                            <FloatingInput
                                labelStyle={styles.labelInput}
                                inputStyle={styles.input}
                                style={styles.formInput}
                                onChangeText={(expirationDate) => this.setState({ expirationDate })}
                                value={this.state.expirationDate}>Son Kullanma Tarihi *</FloatingInput>
                        </View>

                        <View style={styles.inputContainerChild}>
                            <FloatingInput
                                labelStyle={styles.labelInput}
                                inputStyle={styles.input}
                                style={styles.formInput}
                                onChangeText={(CVC2) => this.setState({ CVC2 })}
                                value={this.state.CVC2}>Güvenlik Kodu (CVC2) *</FloatingInput>
                        </View>
                    </View>
                </View>

                <View style={styles.cvcInfoContainer}>
                    <View style={styles.child} />
                    <View style={styles.cvcInfoTextContainer}>
                        <Text style={styles.cvcInfoText}>Kartınızın arka yüzünde bulunan 3 haneli sayı</Text>
                    </View>
                </View>

                <View style={styles.informationContainer}>
                    <View style={styles.child} />
                    <View style={styles.informationTextContainer}>
                        <View style={styles.infoIconContainer}><Ionicons name={'md-information-circle-outline'} size={28} /></View>
                        <Text>Kredi kartı bilgileriniz Platform App tarafından tutulmamaktadır ödeme altyapısı Mastercard tarafından sağlanmaktadır.</Text>
                    </View>
                    <View style={styles.child} />
                </View>

                <TouchableOpacity onPress={this.makeOrder}
                    style={styles.completePaymentContainer}>
                    <Text style={styles.completePaymentText}>Siparişi Tamamla</Text>
                </TouchableOpacity>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', top: 0, left: 0, height: Dimensions.get('window').height, width: Dimensions.get('window').width,
        backgroundColor: '#EDEDED', display: 'flex', flexDirection: 'column'
    },
    paymentHeader: {
        flex: .16, backgroundColor: 'white', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        shadowColor: '#000', shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.32, shadowRadius: 6, elevation: 9
    },
    labelInput: { color: '#57A25A', fontSize: 15 },
    inputContainerChild: { flex: 1 },
    input: { borderWidth: 0, borderBottomWidth: 1.5, borderColor: '#333', color: 'black' },
    totalPriceText: { color: 'black', fontWeight: 'bold', fontSize: 20 },
    totalPrice: { color: 'black', fontWeight: 'bold', fontSize: 24 },
    cardInformationContainer: { flex: .3 },
    inputContainer: { flex: 1, marginHorizontal: 12 },
    rowInputContainer: { flex: 1, flexDirection: 'row', marginHorizontal: 12 },
    child: { flex: 1 },
    completePaymentContainer: { alignItems: 'center', justifyContent: 'center', flex: .6, backgroundColor: '#D3D3D3', margin: 8, borderRadius: 36, flex: .1 },
    completePaymentText: { fontSize: 22, fontWeight: 'bold', color: '#8D8D8D' },
    cvcInfoContainer: { flex: .1, flexDirection: 'row' },
    infoIconContainer: { margin: 8 },
    cvcInfoTextContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    cvcInfoText: { fontSize: 14, color: '#A5A5A5' },
    informationContainer: { alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row', flex: .1 },
    informationTextContainer: { flex: 7, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }
})

const mapStateToProps = ({
    reducer1: {
        cart
    }
}) => ({
    cart
})

const mapDispatchToProps = {
    makeOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(OnlinePaymentScreen)