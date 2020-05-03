import React from 'react'
import { connect } from 'react-redux'
import { RFValue } from 'react-native-responsive-fontsize'
import axios from 'axios'
import {
  ScrollView, TouchableOpacity, Text, StyleSheet,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SERVER_URL } from 'react-native-dotenv'
import joi from 'react-native-joi'

import PasswordChangedPopup from '../components/popups/PasswordChangedPopup'
import ButtonComponent from '../components/ButtonComponent'
import InputComponent from '../components/InputComponent'

class ResetPasswordScreen extends React.PureComponent {
    state = {
      scaleAnimationModal: false,
      errorMessage: '',

      phoneNumber: this.props.route.params.phoneNumber,
      activationCode: '',
      password: '',

      invalidPhoneNumber: false,
      invalidActivationCode: false,
      invalidPassword: false,

      isPhoneNumberInitialized: true,
      isActivationCodeInitialized: false,
      isPasswordInitialized: false,
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
          { activationCode: this.state.activationCode, phoneNumber: this.state.phoneNumber, newPassword: this.state.password }).then(({ status }) => {
          if (status === 200) {
            this.setState({ scaleAnimationModal: true })
          }
        })
      }
    }

    onResendClick = () => {
      axios.post(`${SERVER_URL}/send-activation-code`, {
        phoneNumber: this.state.phoneNumber,
        activationCodeType: 1, // RESET
      })
    }

    onPhoneChange = (phoneNumber) => {
      joi.string().trim().strict().min(10)
        .max(13)
        .validate(phoneNumber, (err) => {
          this.setState({ phoneNumber, isPhoneNumberInitialized: true, invalidPhoneNumber: !!err })
        })
    }

    onActivationCodeChange = (activationCode) => {
      joi.string().trim().strict().min(4)
        .max(4)
        .validate(activationCode, (err, val) => {
          this.setState({ activationCode: val, isActivationCodeInitialized: true, invalidActivationCode: !!err })
        })
    }

    onPasswordChange = (password) => {
      joi.string().alphanum().min(4).validate(password, (err) => {
        this.setState({ password, isPasswordInitialized: true, invalidPassword: !!err })
      })
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
              textContentType: 'telephoneNumber',
              placeholder: 'Telefon numarası',
              maxLength: 10,
            }}
            invalid={this.state.invalidPhoneNumber && this.state.isPhoneNumberInitialized}
            value={this.state.phoneNumber}
            onChange={this.onPhoneChange}
          />

          <InputComponent
            options={{
              keyboardType: 'number-pad',
              placeholder: 'Aktivasyon kodu',
              maxLength: 4,
            }}
            invalid={this.state.invalidActivationCode && this.state.isActivationCodeInitialized}
            value={this.state.activationCode}
            onChange={this.onActivationCodeChange}
          />

          <InputComponent
            options={{
              secureTextEntry: true,
              textContentType: 'password',
              placeholder: 'Yeni şifre (en az 4 karakter)',
            }}
            invalid={this.state.invalidPassword && this.state.isPasswordInitialized}
            value={this.state.password}
            onChange={this.onPasswordChange}
          />

          <ButtonComponent
            disabled={
                        this.state.invalidPhoneNumber || !this.state.isPhoneNumberInitialized
                        || this.state.invalidActivationCode || !this.state.isActivationCodeInitialized
                        || this.state.invalidPassword || !this.state.isPasswordInitialized
                    }
            text="Şifremi sıfırla"
            onClick={this.onResetPasswordClick}
          />

          <TouchableOpacity style={styles.resendContainer} onPress={this.onResendClick}>
            <Ionicons name="md-refresh" size={28} color="#6E7586" />
            <Text style={styles.resendCodeText}>Yeniden gönder</Text>
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
    messagePopupRef,
  },
}) => ({
  messagePopupRef,
})

export default connect(mapStateToProps)(ResetPasswordScreen)
