import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import HeadingDivider from '../components/HeadingDivider'

class CompletePaymentScreen extends Component {
    render() {
        return (
            <React.Fragment>
                <HeadingDivider title={'Adres Seçimi'} />
                <HeadingDivider title={'Gönderim Zamanı'} />
                <HeadingDivider title={'Ödeme Şekli'} />
                <HeadingDivider title={'Sipariş Notu'} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CompletePaymentScreen)