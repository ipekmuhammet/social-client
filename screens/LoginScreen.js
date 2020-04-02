import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { View, TouchableOpacity, TextInput, Text, Alert, AsyncStorage, StyleSheet } from 'react-native'

import { login } from '../actions/actions4'

class LoginScreen extends React.PureComponent {

    state = {
        // countryCode: '+90',
        phoneNumber: '905468133198',
        password: '1234'
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.child}>
                    <TouchableOpacity style={styles.facebookButton} onPress={() => {
                        console.log('Connect with Facebook')
                    }}>
                        <Text style={styles.facebookText}>Connect with Facebook</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.child, { flexDirection: 'row' }]}>
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
                        onPress={() => {
                            axios.post(`http://192.168.1.102:3000/login`, { phone_number: this.state.phoneNumber, password: this.state.password }).then(res => {
                                if (res.status === 200) {
                                    this.props.login(res.data.token, res.data.user, this.props.navigation)
                                } else {
                                    Alert.alert('err1', JSON.stringify(res))
                                }
                            }).catch((err) => {
                                console.log(err)
                                Alert.alert('err2', JSON.stringify(err))
                            })
                        }}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.child}>
                    <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => {
                        this.props.navigation.navigate('forgotPassword')
                    }}>
                        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.child} />
                <View style={styles.child} />

                <View style={styles.child}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('register') }}
                        style={styles.registerButton}>
                        <Text style={styles.registerText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, marginVertical: 12 },
    child: { flex: 1, margin: 3 },
    facebookButton: { backgroundColor: '#3B589E', flex: 1, margin: 4, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    registerButton: { backgroundColor: 'white', borderWidth: 1, borderColor: '#5D3EBD', flex: 1, margin: 4, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    forgotPasswordButton: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    loginButton: { backgroundColor: '#5D3EBD', flex: 1, margin: 4, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    input: { flex: 1, margin: 4, borderRadius: 6, paddingHorizontal: 12, fontSize: 19, borderWidth: .8, borderColor: '#ABABAB' },
    facebookText: { color: 'white', fontSize: 19 },
    loginText: { color: 'white', fontSize: 19 },
    forgotPasswordText: { color: '#6E7586', fontSize: 19, fontWeight: 'bold' },
    registerText: { color: '#5D3EBD', fontSize: 19, fontWeight: 'bold' }
})

const mapDispatchToProps = {
    login
}

export default connect(null, mapDispatchToProps)(LoginScreen)