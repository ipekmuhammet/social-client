import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'
import { connect } from 'react-redux'

import FloatingInput from 'react-native-floating-labels'
import { Ionicons } from '@expo/vector-icons'

import { makeOrder } from '../actions/actions1'

class OnlinePaymentScreen extends React.PureComponent {

    state = {
        cardNumber: '',
        expirationDate: '',
        CVC2: ''
    }

    makeOrder = () => {
        this.props.makeOrder(this.props.cart, this.props.navigation)
    }

    render() {

        const products = Object.values(this.props.cart)
        const totalPrice = products.reduce((previousValue, currentValue) => previousValue + parseFloat(currentValue.price) * currentValue.count, 0).toFixed(2)

        return (
            <View style={styles.container}>

                <View style={{
                    flex: .16, backgroundColor: 'white', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    shadowColor: '#000', shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.32, shadowRadius: 6, elevation: 9
                }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Ödeme Tutarı</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 24 }}>{`${totalPrice} TL`}</Text>
                    </View>
                </View>


                <View style={{ flex: .3 }}>
                    <View style={{ flex: 1, marginHorizontal: 12 }}>
                        <FloatingInput
                            labelStyle={styles.labelInput}
                            inputStyle={styles.input}
                            style={styles.formInput}
                            value='john@email.com'>Kart Numarası *</FloatingInput>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 12 }}>
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
                </View>

                <View style={{ flex: .1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }} />
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 14, color: '#A5A5A5' }}>Kartınızın arka yüzünde bulunan 3 haneli sayı</Text>
                    </View>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row', flex: .1 }}>
                    <View style={{ flex: 1 }} />
                    <View style={{ flex: 7, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ margin: 8 }}><Ionicons name={'md-information-circle-outline'} size={28} /></View>
                        <Text>Kredi kartı bilgileriniz Platform App tarafından tutulmamaktadır ödeme altyapısı Mastercard tarafından sağlanmaktadır.</Text>
                    </View>
                    <View style={{ flex: 1 }} />
                </View>

                <TouchableOpacity onPress={this.makeOrder}
                    style={{ alignItems: 'center', justifyContent: 'center', flex: .6, backgroundColor: '#D3D3D3', margin: 8, borderRadius: 36, flex: .1 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#8D8D8D' }}>Siparişi Tamamla</Text>
                </TouchableOpacity>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        top: 0,
        left: 0,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#EDEDED',
        display: 'flex',
        flexDirection: 'column'
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