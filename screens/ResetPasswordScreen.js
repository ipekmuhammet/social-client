import React from 'react'
import axios from 'axios'
import { View, TouchableOpacity, TextInput, Text, StyleSheet, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import PasswordChangedPopup from '../components/popups/PasswordChangedPopup'

class ResetPasswordScreen extends React.PureComponent {

    state = {
        scaleAnimationModal: false,
        phoneNumber: '905468133198',
        activationCode: '',
        password: '1234'
    }

    setPopupState = (state) => {
        this.setState(state)
    }

    render() {
        return (
            <View style={styles.container}>
                <PasswordChangedPopup scaleAnimationModal={this.state.scaleAnimationModal} setPopupState={this.setPopupState} />
                <View style={[styles.child, styles.inputContainer]}>

                    {
                        //  <TextInput
                        //      keyboardType={'phone-pad'}
                        //      placeholder={'Country/Region Code'}
                        //      style={styles.input} />
                    }

                    <TextInput
                        onChangeText={(phoneNumber) => { this.setState({ phoneNumber }) }}
                        value={this.state.phoneNumber}
                        keyboardType={'phone-pad'}
                        placeholder={'Phone Number'}
                        style={styles.input} />

                </View>

                <View style={[styles.child, styles.inputContainer]}>
                    <TextInput
                        onChangeText={(activationCode) => { this.setState({ activationCode }) }}
                        value={this.state.activationCode}
                        keyboardType={'number-pad'}
                        maxLength={4}
                        placeholder={'Activation Code'}
                        style={styles.input} />
                </View>

                <View style={[styles.child, styles.inputContainer]}>
                    <TextInput
                        onChangeText={(password) => { this.setState({ password }) }}
                        value={this.state.password}
                        secureTextEntry={true}
                        placeholder={'New Password (min 4 characters)'}
                        style={styles.input} />
                </View>

                <View style={styles.child}>
                    <TouchableOpacity
                        style={styles.resetPasswordButton}
                        onPress={() => {
                            axios.put('http://192.168.1.102:3000/send-activation-code',
                                { activation_code: this.state.activationCode, phone_number: this.state.phoneNumber, new_password: this.state.password }
                            ).then(({ status }) => {
                                if (status === 200) {
                                    this.setState({ scaleAnimationModal: true })
                                }
                            }).catch((reason) => {
                                Alert.alert(JSON.stringify(reason)) // TDOO
                            })
                        }}>
                        <Text style={styles.resetPasswordText}>Reset Password</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.child}>
                    <TouchableOpacity style={styles.resendContainer} onPress={() => {
                        axios.post('http://192.168.1.102:3000/send-activation-code', { phone_number: this.state.phoneNumber })
                    }}>
                        <Ionicons name={'md-refresh'} size={32} color={'#6E7586'} />
                        <Text style={styles.resendCodeText}>Resend Code</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.child} />
                <View style={styles.child} />
                <View style={styles.child} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, marginVertical: 12 },
    child: { flex: 1, margin: 3 },
    inputContainer: { flexDirection: 'row' },
    input: { flex: 1, margin: 4, borderRadius: 6, paddingHorizontal: 12, fontSize: 19, borderWidth: .8, borderColor: '#ABABAB' },
    resetPasswordButton: { backgroundColor: '#5D3EBD', flex: 1, margin: 4, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    resendContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    resendCodeText: { fontSize: 22, paddingHorizontal: 12, color: '#6E7586' },
    resetPasswordText: { color: 'white', fontSize: 19 }
})

export default ResetPasswordScreen