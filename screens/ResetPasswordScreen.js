import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import axios from 'axios'
import { ScrollView, View, TouchableOpacity, TextInput, Text, StyleSheet, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SERVER_URL } from 'react-native-dotenv'

import PasswordChangedPopup from '../components/popups/PasswordChangedPopup'
import MessagePopup from '../components/popups/MessagePopup'
import ButtonComponent from '../components/ButtonComponent'

class ResetPasswordScreen extends React.PureComponent {

    state = {
        scaleAnimationModal: false,
        phoneNumber: this.props.route.params.phoneNumber,
        activationCode: '',
        password: '',
        requiredPopup: null,
        invalidPasswordPopup: null,
        errorPopupFromResponse: null,
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
            this.state.errorPopupFromResponse.showMessage({ message: '' })
        })
    }

    onResetPasswordClick = () => {
        if (this.state.activationCode === '' || this.state.password === '' || this.state.phoneNumber === '') {

            this.state.requiredPopup.showMessage({ message: '' })

        } else if (this.state.password.length < 4) {

            this.state.invalidPasswordPopup.showMessage({ message: '' })

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

    onErrorPopupRef = (ref) => {
        this.setState({ errorPopupFromResponse: ref })
    }

    onRequiredPopupRef = (ref) => {
        this.setState({ requiredPopup: ref })
    }

    onInvalidPopupRef = (ref) => {
        this.setState({ invalidPasswordPopup: ref })
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

                <MessagePopup
                    onRef={this.onErrorPopupRef}
                    text={this.state.errorMessage}>
                    <Ionicons name={'md-warning'} size={48} color={'red'} />
                </MessagePopup>

                <MessagePopup
                    onRef={this.onRequiredPopupRef}
                    text={'Lütfen gerekli alanlarını doldurunuz.'}>
                    <Ionicons name={'md-warning'} size={48} color={'red'} />
                </MessagePopup>

                <MessagePopup
                    onRef={this.onInvalidPopupRef}
                    text={'Yeni şifreniz en az 4 haneli olmalı.'}>
                    <Ionicons name={'md-warning'} size={48} color={'red'} />
                </MessagePopup>

                <View style={[styles.child, styles.inputContainer]}>

                    {
                        //  <TextInput
                        //      keyboardType={'phone-pad'}
                        //      placeholder={'Country/Region Code'}
                        //      style={styles.input} />
                    }

                    <TextInput
                        onChangeText={this.onPhoneChange}
                        value={this.state.phoneNumber}
                        keyboardType={'phone-pad'}
                        placeholder={'Phone Number'}
                        style={styles.input} />

                </View>

                <View style={[styles.child, styles.inputContainer]}>
                    <TextInput
                        onChangeText={this.onActivationCodeChange}
                        value={this.state.activationCode}
                        keyboardType={'number-pad'}
                        maxLength={4}
                        placeholder={'Activation Code'}
                        style={styles.input} />
                </View>

                <View style={[styles.child, styles.inputContainer]}>
                    <TextInput
                        onChangeText={this.onPasswordChange}
                        value={this.state.password}
                        secureTextEntry={true}
                        placeholder={'New Password (min 4 characters)'}
                        style={styles.input} />
                </View>

                <View style={styles.child}>
                    <ButtonComponent text={'Reset Password'} onClick={this.onResetPasswordClick} />
                </View>

                <View style={styles.child}>
                    <TouchableOpacity style={styles.resendContainer} onPress={this.onResendClick}>
                        <Ionicons name={'md-refresh'} size={28} color={'#6E7586'} />
                        <Text style={styles.resendCodeText}>Resend Code</Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: { marginVertical: RFValue(12, 600) },
    child: { height: RFValue(60, 600), margin: RFValue(3, 600), zIndex: -1 },
    inputContainer: { flexDirection: 'row' },
    input: {
        flex: 1, margin: RFValue(4, 600), borderRadius: 6,
        paddingHorizontal: RFValue(12, 600), fontSize: RFValue(18, 600), borderWidth: .8, borderColor: '#ABABAB'
    },
    resendContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    resendCodeText: { fontSize: RFValue(19, 600), paddingHorizontal: RFValue(12, 600), color: '#6E7586' },
})

export default ResetPasswordScreen