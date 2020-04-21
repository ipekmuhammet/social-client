import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, StyleSheet } from 'react-native'
import axios from 'axios'
import { RFValue } from 'react-native-responsive-fontsize'
import { SERVER_URL } from 'react-native-dotenv'
import joi from 'react-native-joi'

import PasswordChangedPopup from '../components/popups/PasswordChangedPopup'
import ButtonComponent from '../components/ButtonComponent'
import InputComponent from '../components/InputComponent'

class ChangePasswordScreen extends React.PureComponent {

    state = {
        scaleAnimationModal: false,
        samePasswordPopup: null,
        emptyPasswordPopup: null,
        invalidPasswordPopup: null,

        oldPassword: '',
        password: '',

        invalidOldPassword: false,
        invalidPassword: false,

        isOldPasswordInitialized: false,
        isPasswordInitialized: false
    }

    setPopupState = (state) => {
        this.setState({ scaleAnimationModal: state.scaleAnimationModal })

        if (!state.scaleAnimationModal) {
            this.props.navigation.pop()
        }
    }

    onChangePasswordClick = () => {
        if (this.state.oldPassword === '' || this.state.password === '') {

            this.props.messagePopupRef.showMessage({ message: 'Lütfen gerekli alanlarını doldurunuz' })

        } else if (this.state.password.length < 4) {

            this.props.messagePopupRef.showMessage({ message: 'Yeni şifreniz en az 4 haneli olmalı' })

        } else if (this.state.oldPassword === this.state.password) {

            this.props.messagePopupRef.showMessage({ message: 'Yeni şifre eskisi ise aynı olamaz' })

        } else {

            axios.put(`${SERVER_URL}/user/change-password`, { old_password: this.state.oldPassword, new_password: this.state.password })
                .then(({ status }) => {
                    if (status === 200) {
                        this.setState({ scaleAnimationModal: true })
                    } else {
                        console.log(status) // TODO
                    }
                }).catch((reason) => {
                    console.log(reason) // TODO
                })

        }
    }

    onOldPasswordChange = (oldPassword) => {
        joi.string().alphanum().min(4).validate(oldPassword, (err, val) => {
            this.setState({ oldPassword, isOldPasswordInitialized: true, invalidOldPassword: !!err })
        })
    }

    onPasswordChange = (password) => {
        joi.string().alphanum().min(4).validate(password, (err, val) => {
            this.setState({ password, isPasswordInitialized: true, invalidPassword: !!err })
        })
    }

    render() {
        return (
            <ScrollView style={styles.container}>

                <PasswordChangedPopup scaleAnimationModal={this.state.scaleAnimationModal} setPopupState={this.setPopupState} />

                <InputComponent
                    options={{
                        secureTextEntry: true,
                        textContentType: 'password',
                        placeholder: 'Current Password'
                    }}
                    invalid={this.state.invalidOldPassword && this.state.isOldPasswordInitialized}
                    value={this.state.oldPassword}
                    onChange={this.onOldPasswordChange} />

                <InputComponent
                    options={{
                        secureTextEntry: true,
                        textContentType: 'password',
                        placeholder: 'New Password (min 4 characters)'
                    }}
                    invalid={this.state.invalidPassword && this.state.isPasswordInitialized}
                    value={this.state.password}
                    onChange={this.onPasswordChange} />

                <ButtonComponent
                    disabled={
                        this.state.invalidPassword || !this.state.isPasswordInitialized ||
                        this.state.invalidOldPassword || !this.state.isOldPasswordInitialized
                    }
                    text={'Change Password'}
                    onClick={this.onChangePasswordClick} />

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: { marginVertical: RFValue(12, 600) },
    resendContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    resendCodeText: { fontSize: RFValue(20, 600), paddingHorizontal: RFValue(12, 600), color: '#6E7586' }
})

const mapStateToProps = ({
    globalReducer: {
        messagePopupRef
    }
}) => ({
    messagePopupRef
})

export default connect(mapStateToProps)(ChangePasswordScreen)