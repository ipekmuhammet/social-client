import React from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import HeadingDivider from '../components/HeadingDivider'
import CompletePayment from '../components/CompletePayment'

import AddressSelectComponent from '../components/CompletePaymentComponents/AddressSelectComponent'
import OrderTimeComponent from '../components/CompletePaymentComponents/OrderTimeComponent'
import PaymentTypeSelectComponent from '../components/CompletePaymentComponents/PaymentTypeSelectComponent'
import OrderNoteComponent from '../components/CompletePaymentComponents/OrderNoteComponent'

const CompletePaymentScreen = ({ navigation }) => (
    <React.Fragment>
        <ScrollView>
            <HeadingDivider title={'Adres Seçimi'} />
            <AddressSelectComponent />
            <HeadingDivider title={'Gönderim Zamanı'} />
            <OrderTimeComponent />
            <HeadingDivider title={'Ödeme Şekli'} />
            <PaymentTypeSelectComponent navigation={navigation} />
            <HeadingDivider title={'Sipariş Notu'} />
            <OrderNoteComponent />
            <View style={{ height: 90 }} />
        </ScrollView>
        <CompletePayment completable={true} navigation={navigation}/>
    </React.Fragment>
)

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CompletePaymentScreen)