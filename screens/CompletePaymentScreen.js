import React from 'react'
import { connect } from 'react-redux'
import { View, ScrollView, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Ionicons } from '@expo/vector-icons'

import MessagePopup from '../components/popups/MessagePopup'
import HeadingDivider from '../components/HeadingDivider'
import CompletePayment from '../components/CompletePayment'

import AddressSelectComponent from '../components/CompletePaymentComponents/AddressSelectComponent'
import PaymentTypeSelectComponent from '../components/CompletePaymentComponents/PaymentTypeSelectComponent'
//  import OrderTimeComponent from '../components/CompletePaymentComponents/OrderTimeComponent'
//  import OrderNoteComponent from '../components/CompletePaymentComponents/OrderNoteComponent'

class CompletePaymentScreen extends React.PureComponent {

    state = {
        kartRef: null,
        addressRef: null
    }

    render() {
        const { navigation, cards, addresses, selectedCard, selectedAddress } = this.props

        return (
            <React.Fragment>

                <MessagePopup
                    onRef={(ref) => {
                        this.setState({ kartRef: ref })
                    }}
                    text={'Lütfen kart seçiniz.'}>
                    <Ionicons name={'md-warning'} size={48} color={'red'} />
                </MessagePopup>

                <MessagePopup
                    onRef={(ref) => {
                        this.setState({ addressRef: ref })
                    }}
                    text={'Lütfen adres seçiniz.'}>
                    <Ionicons name={'md-warning'} size={48} color={'red'} />
                </MessagePopup>

                <ScrollView style={{ zIndex: -1 }}>
                    <HeadingDivider title={'Adres Seçimi'} />

                    <AddressSelectComponent
                        navigation={navigation}
                        title={(addresses.find(address => address._id === selectedAddress))?.open_address ?? 'Adres seçiniz'}
                        subTitle={(addresses.find(address => address._id === selectedAddress))?.open_address ?? 'Adres seçiniz'} />

                    <HeadingDivider title={'Ödeme Şekli'} />

                    <PaymentTypeSelectComponent
                        navigation={navigation}
                        title={(cards.find(card => card.id === selectedCard))?.cardLabel ?? 'Kart Seçiniz'}
                        subTitle={(cards.find(card => card.id === selectedCard))?.cardNumber ?? 'Kart Seçiniz'} />

                    {
                        //  <HeadingDivider title={'Gönderim Zamanı'} />
                        //  <OrderTimeComponent />
                        //  <HeadingDivider title={'Sipariş Notu'} />
                        //  <OrderNoteComponent />
                    }

                    <View style={styles.footer} />
                </ScrollView>
                <CompletePayment
                    kartRef={this.state.kartRef}
                    addressRef={this.state.addressRef}
                    completable={true}
                    navigation={navigation}
                />
            </React.Fragment>
        )
    }
}

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