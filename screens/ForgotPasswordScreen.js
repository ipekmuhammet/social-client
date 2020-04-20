import React from 'react'
import axios from 'axios'
import { ScrollView, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { SERVER_URL } from 'react-native-dotenv'

import ButtonComponent from '../components/ButtonComponent'
import InputComponent from '../components/InputComponent'

class ForgotPasswordScreen extends React.Component {

    state = {
        phoneNumber: '905468133198'
    }

    onSendCodeClick = () => {
        axios.post(`${SERVER_URL}/send-activation-code`, {
            phone_number: this.state.phoneNumber
        }).then(({ status }) => {
            if (status === 202) {
                this.props.navigation.navigate('resetPassword', { phoneNumber: this.state.phoneNumber })
            }
        })
    }

    onPhoneNumberChange = (phoneNumber) => {
        this.setState({ phoneNumber })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <InputComponent
                    options={{
                        keyboardType: 'phone-pad',
                        placeholder: 'Phone Number'
                    }}
                    value={this.state.phoneNumber}
                    onChange={this.onPhoneNumberChange} />
                <ButtonComponent text={'Send Code'} onClick={this.onSendCodeClick} />

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: { marginVertical: RFValue(12, 600) }
})

export default ForgotPasswordScreen