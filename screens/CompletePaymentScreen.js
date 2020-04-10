import React from 'react'
import { connect } from 'react-redux'
import { View, ScrollView, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import HeadingDivider from '../components/HeadingDivider'
import CompletePayment from '../components/CompletePayment'

import AddressSelectComponent from '../components/CompletePaymentComponents/AddressSelectComponent'
import PaymentTypeSelectComponent from '../components/CompletePaymentComponents/PaymentTypeSelectComponent'
//  import OrderTimeComponent from '../components/CompletePaymentComponents/OrderTimeComponent'
//  import OrderNoteComponent from '../components/CompletePaymentComponents/OrderNoteComponent'

const CompletePaymentScreen = ({ navigation, cards, addresses, selectedCard, selectedAddress }) => (
    <React.Fragment>
        <ScrollView>
            <HeadingDivider title={'Adres Seçimi'} />
            <AddressSelectComponent
                navigation={navigation}
                title={(addresses.find(address => address._id === selectedAddress))?.open_address ?? 'Adres seçiniz'}
                subTitle={(addresses.find(address => address._id === selectedAddress))?.open_address ?? 'Adres seçiniz'}
            />
            <HeadingDivider title={'Ödeme Şekli'} />
            <PaymentTypeSelectComponent
                navigation={navigation}
                title={cards.find(card => card.id === selectedCard).cardLabel || 'Kart Seçiniz'}
                subTitle={cards.find(card => card.id === selectedCard).cardNumber || 'Kart Seçiniz'}
            />
            {
                //  <HeadingDivider title={'Gönderim Zamanı'} />
                //  <OrderTimeComponent />
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

const mapStateToProps = ({
    reducer2: {
        cards,
        addresses,
        selectedCard,
        selectedAddress
    }
}) => ({
    cards,
    addresses,
    selectedCard,
    selectedAddress
})

export default connect(mapStateToProps)(CompletePaymentScreen)