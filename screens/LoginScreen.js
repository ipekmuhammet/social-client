import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, TouchableOpacity, TextInput, Text, AsyncStorage, StyleSheet } from 'react-native'
import axios from 'axios'
import { RFValue } from 'react-native-responsive-fontsize'
import { SERVER_URL } from 'react-native-dotenv'

import { login } from '../actions/actions4'
import ButtonComponent from '../components/ButtonComponent'

class LoginScreen extends React.Component {

    state = {
        // countryCode: '+90',
        phoneNumber: '905468133198',
        password: '1234'
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
        this.props.login({ phone_number: this.state.phoneNumber, password: this.state.password }, this.props.messagePopupRef, () => {
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
                    <View style={[styles.child, styles.inputContainer]}>
                        {
                            // <TextInput
                            //     value={this.state.countryCode}
                            //     placeholder={'Country/Region Code'}
                            //     style={styles.input} />
                        }
                        <TextInput
                            value={this.state.phoneNumber}
                            onChangeText={this.onPhoneChange}
                            keyboardType={'phone-pad'}
                            textContentType={'telephoneNumber'}
                            placeholder={'Phone Number'}
                            style={styles.input} />
                    </View>
                    <View style={styles.child}>
                        <TextInput
                            value={this.state.password}
                            onChangeText={this.onPasswordChange}
                            secureTextEntry={true}
                            textContentType={'password'}
                            placeholder={'Password (min 4 characters)'}
                            style={styles.input} />
                    </View>

                    <ButtonComponent text={'Login'} onClick={this.onLoginClick} />

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