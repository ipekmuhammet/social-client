import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import PaymentType from '../components/PaymentType'

const paymentTypes = {
    online: {
        title: 'Online Kredi/Banka Kartı',
        detail: 'Online ödeyin, zaman kazanın.',
        icon: 'md-briefcase'
    },
    card: {
        title: 'Kredi Kartı',
        detail: 'Sipariş teslimide kredi kartı / banka kartı ile ödeme',
        icon: 'ios-card'
    },
    cash: {
        title: 'Nakit',
        detail: 'Nakit ödeme',
        icon: 'ios-wallet'
    }
}

const PaymentHeading = ({ title }) => (
    <View style={{ flexDirection: 'row', overflow: 'hidden', paddingVertical: 2 }}>
        <View style={{
            flex: 1,
            justifyContent: 'center', height: 48, paddingHorizontal: 24, backgroundColor: '#EDEDED',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 6,
            elevation: 9
        }}>
            <Text style={{ color: '#A8A8A8', fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
        </View>
    </View>
)

const ChoosePaymentScreen = () => (
    <View>
        <PaymentHeading title={'Online Ödeme'} />
        <PaymentType {...paymentTypes.online} />
        <PaymentHeading title={'Kapıda Ödeme'} />
        <PaymentType {...paymentTypes.card} />
        <PaymentType {...paymentTypes.cash} />
    </View>
)

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ChoosePaymentScreen)
