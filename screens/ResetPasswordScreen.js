import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import axios from 'axios'
import { ScrollView, View, TouchableOpacity, TextInput, Text, StyleSheet, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SERVER_URL } from 'react-native-dotenv'

import PasswordChangedPopup from '../components/popups/PasswordChangedPopup'

class ResetPasswordScreen extends React.PureComponent {

    state = {
        scaleAnimationModal: false,
        phoneNumber: this.props.route.params.phoneNumber || '905468133100',
        activationCode: '',
        password: '1234'
    }

    setPopupState = (state) => {
        this.setState(state)
        if (!state.scaleAnimationModal) {
            this.props.navigation.navigate('Welcome', { screen: 'login' })
        }
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
                            axios.put(`${SERVER_URL}/reset-password`,
                                { activationCode: this.state.activationCode, phone_number: this.state.phoneNumber, new_password: this.state.password }
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
                        axios.post(`${SERVER_URL}/send-activation-code`, { phone_number: this.state.phoneNumber })
                    }}>
                        <Ionicons name={'md-refresh'} size={32} color={'#6E7586'} />
                        <Text style={styles.resendCodeText}>Resend Code</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: { marginVertical: RFValue(12, 600) },
    child: { height: RFValue(60, 600), margin: RFValue(3, 600) },
    inputContainer: { flexDirection: 'row' },
    input: {
        flex: 1, margin: RFValue(4, 600), borderRadius: 6,
        paddingHorizontal: RFValue(12, 600), fontSize: RFValue(19, 600), borderWidth: .8, borderColor: '#ABABAB'
    },
    resetPasswordButton: {
        backgroundColor: '#5D3EBD', flex: 1, margin: RFValue(4, 600),
        borderRadius: 10, alignItems: 'center', justifyContent: 'center'
    },
    resendContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    resendCodeText: { fontSize: RFValue(22, 600), paddingHorizontal: RFValue(12, 600), color: '#6E7586' },
    resetPasswordText: { color: 'white', fontSize: RFValue(19, 600) }
})

export default ResetPasswordScreen