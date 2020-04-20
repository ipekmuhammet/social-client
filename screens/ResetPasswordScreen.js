import React from 'react'
import { connect } from 'react-redux'
import { RFValue } from 'react-native-responsive-fontsize'
import axios from 'axios'
import { ScrollView, View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SERVER_URL } from 'react-native-dotenv'

import PasswordChangedPopup from '../components/popups/PasswordChangedPopup'
import ButtonComponent from '../components/ButtonComponent'

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

                <ButtonComponent text={'Reset Password'} onClick={this.onResetPasswordClick} />

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

const mapStateToProps = ({
    globalReducer: {
        messagePopupRef
    }
}) => ({
    messagePopupRef
})

export default connect(mapStateToProps)(ResetPasswordScreen)