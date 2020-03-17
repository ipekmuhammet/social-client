import React from 'react'
import { connect } from 'react-redux'

import HeadingDivider from '../components/HeadingDivider'
import CompletePayment from '../components/CompletePayment'
import AddressSelectComponent from '../components/AddressSelectComponent'

const CompletePaymentScreen = ({ navigation }) => (
    <React.Fragment>
        <HeadingDivider title={'Adres Seçimi'} />
        <AddressSelectComponent />
        <HeadingDivider title={'Gönderim Zamanı'} />
        <HeadingDivider title={'Ödeme Şekli'} />
        <HeadingDivider title={'Sipariş Notu'} />
        <CompletePayment />
    </React.Fragment>
)

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CompletePaymentScreen)