import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { View, ScrollView, StyleSheet } from 'react-native'

import HeadingDivider from '../components/HeadingDivider'
import CompletePayment from '../components/CompletePayment'

import AddressSelectComponent from '../components/CompletePaymentComponents/AddressSelectComponent'
//  import OrderTimeComponent from '../components/CompletePaymentComponents/OrderTimeComponent'
//  import PaymentTypeSelectComponent from '../components/CompletePaymentComponents/PaymentTypeSelectComponent'
//  import OrderNoteComponent from '../components/CompletePaymentComponents/OrderNoteComponent'

const CompletePaymentScreen = ({ navigation }) => (
    <React.Fragment>
        <ScrollView>
            <HeadingDivider title={'Adres Seçimi'} />
            <AddressSelectComponent navigation={navigation} />
            {
                //  <HeadingDivider title={'Gönderim Zamanı'} />
                //  <OrderTimeComponent />
                //  <HeadingDivider title={'Ödeme Şekli'} />
                //  <PaymentTypeSelectComponent navigation={navigation} />
                //  <HeadingDivider title={'Sipariş Notu'} />
                //  <OrderNoteComponent />
            }
            <View style={styles.footer} />
        </ScrollView>
        <CompletePayment completable={true} navigation={navigation} />
    </React.Fragment>
)

const styles = StyleSheet.create({
    footer: { height: RFValue(90, 600) }
})

export default CompletePaymentScreen