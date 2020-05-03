import React from 'react'
import { connect } from 'react-redux'
import { View, ScrollView, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import HeadingDivider from '../components/HeadingDivider'
import CompletePayment from '../components/CompletePayment'

import AddressSelectComponent from '../components/CompletePaymentComponents/AddressSelectComponent'
import PaymentTypeSelectComponent from '../components/CompletePaymentComponents/PaymentTypeSelectComponent'
import { setNeedToLoginPopupState } from '../actions/global-actions'
//  import OrderTimeComponent from '../components/CompletePaymentComponents/OrderTimeComponent'
//  import OrderNoteComponent from '../components/CompletePaymentComponents/OrderNoteComponent'

class CompletePaymentScreen extends React.PureComponent {
  render() {
    const {
      // eslint-disable-next-line no-shadow
      navigation, cards, addresses, selectedCard, selectedAddress, token, setNeedToLoginPopupState,
    } = this.props

    return (
      <>

        <ScrollView style={{ zIndex: -1 }}>
          <HeadingDivider title="Adres Seçimi" />

          <AddressSelectComponent
            navigation={navigation}
            token={token}
            setNeedToLoginPopupState={setNeedToLoginPopupState}
            title={(addresses.find((address) => address._id === selectedAddress))?.openAddress ?? 'Adres seçiniz'}
            subTitle={(addresses.find((address) => address._id === selectedAddress))?.openAddress ?? 'Adres seçiniz'}
          />

          <HeadingDivider title="Ödeme Şekli" />

          <PaymentTypeSelectComponent
            navigation={navigation}
            token={token}
            setNeedToLoginPopupState={setNeedToLoginPopupState}
            title={(cards.find((card) => card.cardToken === selectedCard))?.cardAlias ?? 'Kart Seçiniz'}
            subTitle={(cards.find((card) => card.cardToken === selectedCard))?.cardNumber ?? 'Kart Seçiniz'}
          />

          {
                        //  <HeadingDivider title={'Gönderim Zamanı'} />
                        //  <OrderTimeComponent />
                        //  <HeadingDivider title={'Sipariş Notu'} />
                        //  <OrderNoteComponent />
                    }

          <View style={styles.footer} />
        </ScrollView>

        <CompletePayment
          completable
          navigation={navigation}
        />

      </>
    )
  }
}

const styles = StyleSheet.create({
  footer: { height: RFValue(90, 600) },
})

const mapStateToProps = ({
  reducer2: {
    cards,
    addresses,
    selectedCard,
    selectedAddress,
  },
  reducer4: {
    token,
  },
}) => ({
  cards,
  addresses,
  selectedCard,
  selectedAddress,
  token,
})

const mapDispatchToProps = {
  setNeedToLoginPopupState,
}

export default connect(mapStateToProps, mapDispatchToProps)(CompletePaymentScreen)
