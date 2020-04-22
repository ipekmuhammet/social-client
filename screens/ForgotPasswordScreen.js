import React from 'react'
import axios from 'axios'
import { ScrollView, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { SERVER_URL } from 'react-native-dotenv'
import joi from 'react-native-joi'

import ButtonComponent from '../components/ButtonComponent'
import InputComponent from '../components/InputComponent'

class ForgotPasswordScreen extends React.PureComponent {

    state = {
        phoneNumber: '',
        isPhoneNumberInitialized: false,
        invalidPhoneNumber: false
    }

    onSendCodeClick = () => {
        axios.post(`${SERVER_URL}/send-activation-code`, {
            phone_number: this.state.phoneNumber,
            activationCodeType: 1 // RESET
        }).then(({ status }) => {
            if (status === 202) {
                this.props.navigation.navigate('resetPassword', { phoneNumber: this.state.phoneNumber })
            }
        })
    }

    onPhoneNumberChange = (phoneNumber) => {
        joi.string().trim().strict().min(10).max(13).validate(phoneNumber, (err, val) => {
            this.setState({ phoneNumber, isPhoneNumberInitialized: true, invalidPhoneNumber: !!err })
        })
    }

    render() {
        return (
            <ScrollView style={styles.container}>

                <InputComponent
                    options={{
                        keyboardType: 'phone-pad',
                        placeholder: 'Phone Number'
                    }}
                    invalid={
                        this.state.invalidPhoneNumber && this.state.isPhoneNumberInitialized
                    }
                    value={this.state.phoneNumber}
                    onChange={this.onPhoneNumberChange} />

                <ButtonComponent
                    text={'Send Code'}
                    onClick={this.onSendCodeClick}
                    disabled={
                        this.state.invalidPhoneNumber || !this.state.isPhoneNumberInitialized
                    } />

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: { marginVertical: RFValue(12, 600) }
})

export default ForgotPasswordScreen