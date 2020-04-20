import React from 'react'
import { connect } from 'react-redux'
import { RFValue } from 'react-native-responsive-fontsize'
import axios from 'axios'
import { ScrollView, View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SERVER_URL } from 'react-native-dotenv'

import PasswordChangedPopup from '../components/popups/PasswordChangedPopup'
import ButtonComponent from '../components/ButtonComponent'
import InputComponent from '../components/InputComponent'

class ResetPasswordScreen extends React.PureComponent {

    state = {
        scaleAnimationModal: false,
        phoneNumber: this.props.route.params.phoneNumber,
        activationCode: '',
        password: '',
        errorMessage: ''
    }

    setPopupState = (state) => {
        this.setState({ scaleAnimationModal: state.scaleAnimationModal })
        if (!state.scaleAnimationModal) {
            this.props.navigation.navigate('Welcome', { screen: 'login' })
        }
    }

    showMessagePopupFromError = (errorMessage) => {
        this.setState({ errorMessage }, () => {
            this.props.messagePopupRef.showMessage({ message: this.state.errorMessage })
        })
    }

    onResetPasswordClick = () => {
        if (this.state.activationCode === '' || this.state.password === '' || this.state.phoneNumber === '') {

            this.props.messagePopupRef.showMessage({ message: 'Lütfen gerekli alanlarını doldurunuz' })

        } else if (this.state.password.length < 4) {

            this.props.messagePopupRef.showMessage({ message: 'Yeni şifreniz en az 4 haneli olmalı' })

        } else {

            axios.put(`${SERVER_URL}/reset-password`,
                { activationCode: this.state.activationCode, phone_number: this.state.phoneNumber, new_password: this.state.password }
            ).then(({ status }) => {
                if (status === 200) {
                    this.setState({ scaleAnimationModal: true })
                }
            }).catch(({ response }) => {
                console.log(response.data) // TODO
                this.showMessagePopupFromError(response.data.error)
            })

        }
    }

    onResendClick = () => {
        axios.post(`${SERVER_URL}/send-activation-code`, { phone_number: this.state.phoneNumber })
    }

    onPhoneChange = (phoneNumber) => {
        this.setState({ phoneNumber })
    }

    onActivationCodeChange = (activationCode) => {
        this.setState({ activationCode })
    }

    onPasswordChange = (password) => {
        this.setState({ password })
    }

    render() {
        return (
            <ScrollView style={styles.container}>

                <PasswordChangedPopup scaleAnimationModal={this.state.scaleAnimationModal} setPopupState={this.setPopupState} />

                {
                    //  <TextInput
                    //      keyboardType={'phone-pad'}
                    //      placeholder={'Country/Region Code'}
                    //      style={styles.input} />
                }

                <InputComponent
                    options={{
                        keyboardType: 'phone-pad',
                        placeholder: 'Phone Number',
                    }}
                    value={this.state.phoneNumber}
                    onChange={this.onPhoneChange} />

                <InputComponent
                    options={{
                        maxLength: 4,
                        keyboardType: 'number-pad',
                        placeholder: 'Activation Code',
                    }}
                    value={this.state.activationCode}
                    onChange={this.onActivationCodeChange} />

                <InputComponent
                    options={{
                        secureTextEntry: true,
                        textContentType: 'password',
                        placeholder: 'New Password (min 4 characters)',
                    }}
                    value={this.state.password}
                    onChange={this.onPasswordChange} />

                <ButtonComponent text={'Reset Password'} onClick={this.onResetPasswordClick} />

                <TouchableOpacity style={styles.resendContainer} onPress={this.onResendClick}>
                    <Ionicons name={'md-refresh'} size={28} color={'#6E7586'} />
                    <Text style={styles.resendCodeText}>Resend Code</Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: { marginVertical: RFValue(12, 600) },
    resendContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    resendCodeText: { fontSize: RFValue(19, 600), paddingHorizontal: RFValue(12, 600), color: '#6E7586' },
})

const mapStateToProps = ({
    globalReducer: {
        messagePopupRef
    }
}) => ({
    messagePopupRef
})

export default connect(mapStateToProps)(ResetPasswordScreen)