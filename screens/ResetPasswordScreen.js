import React from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import PasswordChangedPopup from '../components/popups/PasswordChangedPopup'

class ResetPasswordScreen extends React.PureComponent {

    state = {
        scaleAnimationModal: false,
        phoneNumber: '',
        activationCode: '',
        password: ''
    }

    setPopupState = (state) => {
        this.setState(state)
    }

    render() {
        return (
            <View style={styles.container}>
                <PasswordChangedPopup scaleAnimationModal={this.state.scaleAnimationModal} setPopupState={this.setPopupState} />
                <View style={[styles.child, { flexDirection: 'row' }]}>

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

                <View style={[styles.child, { flexDirection: 'row' }]}>
                    <TextInput
                        onChangeText={(activationCode) => { this.setState({ activationCode }) }}
                        value={this.state.activationCode}
                        keyboardType={'number-pad'}
                        placeholder={'Activation Code'}
                        style={styles.input} />
                </View>

                <View style={[styles.child, { flexDirection: 'row' }]}>
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
                            this.setState({ scaleAnimationModal: true })
                        }}>
                        <Text style={styles.resetPasswordText}>Reset Password</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.child, styles.resendContainer]}>
                    <Ionicons name={'md-refresh'} size={32} color={'#6E7586'} />
                    <Text style={styles.resendCodeText}>Resend Code</Text>
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
    input: { flex: 1, margin: 4, borderRadius: 6, paddingHorizontal: 12, fontSize: 19, borderWidth: .8, borderColor: '#ABABAB' },
    resetPasswordButton: { backgroundColor: '#5D3EBD', flex: 1, margin: 4, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    resendContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    resendCodeText: { fontSize: 22, paddingHorizontal: 12, color: '#6E7586' },
    resetPasswordText: { color: 'white', fontSize: 19 }
})

export default ResetPasswordScreen