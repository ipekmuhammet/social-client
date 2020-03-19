import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import FloatingInput from 'react-native-floating-labels'
import { Ionicons } from '@expo/vector-icons'

class OnlinePaymentScreen extends Component {

    state = {
        cardNumber: '',
        expirationDate: '',
        CVC2: ''
    }

    completePayment() {
        console.log('Complete Payment')
    }

    render() {

        const products = Object.values(this.props.cart)
        const totalPrice = products.reduce((previousValue, currentValue) => previousValue + parseFloat(currentValue.price) * currentValue.count, 0).toFixed(2)

        return (
            <View style={{ flexDirection: 'column', left: 0, right: 0, backgroundColor: '#EDEDED' }}>
                <View style={{
                    height: 80, backgroundColor: 'white', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    shadowColor: "#000", shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.32, shadowRadius: 6, elevation: 9
                }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Ödeme Tutarı</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 24 }}>{`${totalPrice} TL`}</Text>
                    </View>
                </View>
                <View style={{ height: 290 }}>
                    <View style={{ flex: 1, marginHorizontal: 12 }}>
                        <FloatingInput
                            labelStyle={styles.labelInput}
                            inputStyle={styles.input}
                            style={styles.formInput}
                            value='john@email.com'>Kart Numarası *</FloatingInput>
                    </View>

                    <View style={{ flex: 1, left: 0, right: 0, flexDirection: 'row', marginHorizontal: 12 }}>
                        <View style={{ flex: 1 }}>
                            <FloatingInput
                                labelStyle={styles.labelInput}
                                inputStyle={styles.input}
                                style={styles.formInput}
                                value='john@email.com'>Son Kullanma Tarihi *</FloatingInput>
                        </View>

                        <View style={{ flex: 1 }}>
                            <FloatingInput
                                labelStyle={styles.labelInput}
                                inputStyle={styles.input}
                                style={styles.formInput}
                                value='john@email.com'>Güvenlik Kodu (CVC2) *</FloatingInput>
                        </View>
                    </View>

                    <View style={{ flex: 1, left: 0, right: 0, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>

                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 14, margin: 6, color: '#A5A5A5' }}>Kartınızın arka yüzünde bulunan 3 haneli sayı</Text>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
                        <View style={{ flex: 1 }} />
                        <View style={{ flex: 7, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ margin: 8 }}><Ionicons name={'md-information-circle-outline'} size={28} /></View>
                            <Text>Kredi kartı bilgileriniz Platform App tarafından tutulmamaktadır; ödeme altyapısı Mastercard tarafından sağlanmaktadır.</Text>
                        </View>
                        <View style={{ flex: 1 }} />
                    </View>
                </View>

                <TouchableOpacity
                    onPress={this.completePayment}
                    style={{ alignItems: 'center', justifyContent: 'center', height: 60, backgroundColor: '#D3D3D3', margin: 8, borderRadius: 36 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#8D8D8D' }}>Siparişi Tamamla</Text>
                </TouchableOpacity>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    labelInput: {
        color: '#57A25A',
        fontSize: 15
    },
    input: {
        borderWidth: 0,
        borderBottomWidth: 1.5,
        borderColor: '#333',
        color: 'black'
    }
});

const mapStateToProps = ({ reducer1: {
    cart
} }) => ({
    cart
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(OnlinePaymentScreen)