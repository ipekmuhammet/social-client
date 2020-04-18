import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, TouchableOpacity, TextInput, Text, AsyncStorage, StyleSheet } from 'react-native'
import axios from 'axios'
import { RFValue } from 'react-native-responsive-fontsize'
import { Ionicons } from '@expo/vector-icons'
import { SERVER_URL } from 'react-native-dotenv'

import MessagePopup from '../components/popups/MessagePopup'

import { login } from '../actions/actions4'

class LoginScreen extends React.Component {

    state = {
        // countryCode: '+90',
        phoneNumber: '905468133198',
        password: '1234',
        popupRef: null
    }

    shouldComponentUpdate = (nextProps, nextState) => ( // Update only state change, not props
        this.state.phoneNumber !== nextState.phoneNumber ||
        this.state.password !== nextState.password ||
        this.state.popupRef !== nextState.popupRef
    )

    saveCart = () => {
        const { cart, token } = this.props
        if (token) {
            axios.post(`${SERVER_URL}/user/cart`, cart)
        }
        AsyncStorage.setItem('cart', JSON.stringify(cart))
    }

    onLoginClick = () => {
        this.props.login({ phone_number: this.state.phoneNumber, password: this.state.password }, this.state.popupRef, () => {
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

    render() {
        return (
            <ScrollView style={styles.container}>

                <MessagePopup
                    onRef={(ref) => {
                        this.setState({ popupRef: ref })
                    }}
                    text={'Wrong GSM or password.'}>
                    <Ionicons name={'md-warning'} size={48} color={'red'} />
                </MessagePopup>

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
                        onChangeText={(phoneNumber) => { this.setState({ phoneNumber }) }}
                        keyboardType={'phone-pad'}
                        textContentType={'telephoneNumber'}
                        placeholder={'Phone Number'}
                        style={styles.input} />
                </View>
                <View style={styles.child}>
                    <TextInput
                        value={this.state.password}
                        onChangeText={password => { this.setState({ password }) }}
                        secureTextEntry={true}
                        textContentType={'password'}
                        placeholder={'Password (min 4 characters)'}
                        style={styles.input} />
                </View>

                <View style={styles.child}>
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={this.onLoginClick}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.child}>
                    <TouchableOpacity style={styles.forgotPasswordButton} onPress={this.goToForgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.child} />
                <View style={styles.child} />
                <View style={styles.empty} />
                <View style={styles.buttonDivider} />

                <View style={styles.child}>
                    <TouchableOpacity
                        onPress={this.goToRegister}
                        style={styles.registerButton}>
                        <Text style={styles.registerText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: { marginVertical: RFValue(12, 600) },
    child: { height: RFValue(60, 600), margin: RFValue(3, 600) },
    facebookButton: { backgroundColor: '#3B589E', flex: 1, margin: RFValue(4, 600), borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    registerButton: { backgroundColor: 'white', borderWidth: 1, borderColor: '#5D3EBD', flex: 1, margin: RFValue(4, 600), borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    forgotPasswordButton: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    loginButton: { backgroundColor: '#5D3EBD', flex: 1, margin: RFValue(4, 600), borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    inputContainer: { flexDirection: 'row' },
    input: { flex: 1, margin: RFValue(4, 600), zIndex: -1, borderRadius: 6, paddingHorizontal: RFValue(12, 600), fontSize: RFValue(18, 600), borderWidth: .8, borderColor: '#ABABAB' },
    facebookText: { color: 'white', fontSize: RFValue(18, 600) },
    loginText: { color: 'white', fontSize: RFValue(20, 600) },
    forgotPasswordText: { color: '#6E7586', fontSize: RFValue(18, 600), fontWeight: 'bold' },
    registerText: { color: '#5D3EBD', fontSize: RFValue(20, 600) },
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
    }
}) => ({
    cart,
    token
})

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)