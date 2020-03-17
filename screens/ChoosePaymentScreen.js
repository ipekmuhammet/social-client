import React from 'react'

import PaymentType from '../components/PaymentType'
import HeadingDivider from '../components/HeadingDivider'

const paymentTypes = {
    online: {
        Id: 0,
        title: 'Online Kredi/Banka Kartı',
        detail: 'Online ödeyin, zaman kazanın.',
        icon: 'md-briefcase'
    },
    card: {
        Id: 1,
        title: 'Kredi Kartı',
        detail: 'Sipariş teslimide kredi kartı / banka kartı ile ödeme',
        icon: 'ios-card'
    },
    cash: {
        Id: 2,
        title: 'Nakit',
        detail: 'Nakit ödeme',
        icon: 'ios-wallet'
    }
}

const ChoosePaymentScreen = ({ navigation }) => (
    <React.Fragment>
        <HeadingDivider title={'Online Ödeme'} />
        <PaymentType navigation={navigation} {...paymentTypes.online} />
        <HeadingDivider title={'Kapıda Ödeme'} />
        <PaymentType navigation={navigation} {...paymentTypes.card} />
        <PaymentType navigation={navigation} {...paymentTypes.cash} />
    </React.Fragment>
)

export default ChoosePaymentScreen
