import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, TouchableOpacity, Text, AsyncStorage, StyleSheet } from 'react-native'
import axios from 'axios'
import { RFValue } from 'react-native-responsive-fontsize'
import { SERVER_URL } from 'react-native-dotenv'
import joi from 'react-native-joi'

import { login } from '../actions/actions4'
import ButtonComponent from '../components/ButtonComponent'
import InputComponent from '../components/InputComponent'

class LoginScreen extends React.Component {

    state = {
        // countryCode: '+90',
        phoneNumber: '',
        password: '',

        invalidPhoneNumber: false,
        invalidPassword: false,

        isPhoneNumberInitialized: false,
        isPasswordInitialized: false
    }

    shouldComponentUpdate = (nextProps, nextState) => ( // Update only state change, not props
        this.state.phoneNumber !== nextState.phoneNumber ||
        this.state.password !== nextState.password
    )

    saveCart = () => {
        const { cart, token } = this.props
        if (token) {
            axios.post(`${SERVER_URL}/user/cart`, cart)
        }
        AsyncStorage.setItem('cart', JSON.stringify(cart))
    }

    onLoginClick = () => {
        this.props.login({ phoneNumber: this.state.phoneNumber, password: this.state.password }, this.props.messagePopupRef, () => {
            this.saveCart()
            this.props.navigation.navigate('Loading', { next: true })
        })
    }

    goToRegister = () => {
        this.props.navigation.navigate('register')
    }

    goToForgotPassword = () => {
        this.props.navigation.navigate('forgotPassword')
    }

    onPhoneChange = (phoneNumber) => {
        this.setState({ phoneNumber })
    }

    onPasswordChange = (password) => {
        this.setState({ password })
    }

    onPhoneChange = (phoneNumber) => {
        joi.string().trim().strict().min(10).max(13).validate(phoneNumber, (err, val) => {
            this.setState({ phoneNumber, isPhoneNumberInitialized: true, invalidPhoneNumber: !!err })
        })
    }

    onPasswordChange = (password) => {
        joi.string().alphanum().min(4).validate(password, (err, val) => {
            this.setState({ password, isPasswordInitialized: true, invalidPassword: !!err })
        })
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>

                <View>

                    {
                        //  <View style={styles.child}>
                        //      <TouchableOpacity style={styles.facebookButton} onPress={() => {
                        //          console.log('Connect with Facebook')
                        //      }}>
                        //          <Text style={styles.facebookText}>Connect with Facebook</Text>
                        //      </TouchableOpacity>
                        //  </View>
                    }
                    {
                        // <TextInput
                        //     value={this.state.countryCode}
                        //     placeholder={'Country/Region Code'}
                        //     style={styles.input} />
                    }

                    <InputComponent
                        options={{
                            keyboardType: 'phone-pad',
                            textContentType: 'telephoneNumber',
                            placeholder: 'Phone Number'
                        }}
                        invalid={this.state.invalidPhoneNumber && this.state.isPhoneNumberInitialized}
                        value={this.state.phoneNumber}
                        onChange={this.onPhoneChange} />

                    <InputComponent
                        options={{
                            secureTextEntry: true,
                            textContentType: 'password',
                            placeholder: 'Password (min 4 characters)',
                        }}
                        invalid={this.state.invalidPassword && this.state.isPasswordInitialized}
                        value={this.state.password}
                        onChange={this.onPasswordChange} />

                    <ButtonComponent
                        disabled={
                            this.state.invalidPhoneNumber || !this.state.isPhoneNumberInitialized ||
                            this.state.invalidPassword || !this.state.isPasswordInitialized
                        }
                        text={'Login'}
                        onClick={this.onLoginClick} />

                    <View style={styles.child}>
                        <TouchableOpacity style={styles.forgotPasswordButton} onPress={this.goToForgotPassword}>
                            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <View style={styles.buttonDivider} />

                    <ButtonComponent text={'Register'} onClick={this.goToRegister} opposite />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'space-between', marginVertical: RFValue(12, 600) },
    child: { height: RFValue(60, 600), margin: RFValue(3, 600) },
    facebookButton: { backgroundColor: '#3B589E', flex: 1, margin: RFValue(4, 600), borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    forgotPasswordButton: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    inputContainer: { flexDirection: 'row' },
    input: { flex: 1, margin: RFValue(4, 600), zIndex: -1, borderRadius: 6, paddingHorizontal: RFValue(12, 600), fontSize: RFValue(18, 600), borderWidth: .8, borderColor: '#ABABAB' },
    facebookText: { color: 'white', fontSize: RFValue(18, 600) },
    forgotPasswordText: { color: '#6E7586', fontSize: RFValue(18, 600), fontWeight: 'bold' },
    empty: { height: RFValue(28, 600) },
    buttonDivider: { height: RFValue(22, 600), backgroundColor: '#EDEEF0' },
    view: { justifyContent: 'flex-end', margin: 0, }
})

const mapStateToProps = ({
    reducer1: {
        cart
    },
    reducer4: {
        token
    },
    globalReducer: {
        messagePopupRef
    }
}) => ({
    cart,
    token,
    messagePopupRef
})

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)