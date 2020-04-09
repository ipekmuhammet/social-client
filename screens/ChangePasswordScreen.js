import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { connect } from 'react-redux'
import axios from 'axios'
import { View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native'

import PasswordChangedPopup from '../components/popups/PasswordChangedPopup'

class ChangePasswordScreen extends React.PureComponent {

    state = {
        oldPassword: '',
        password: ''
    }

    setPopupState = (state) => {
        this.setState(state)
    }

    render() {
        return (
            <View style={styles.container}>
                <PasswordChangedPopup scaleAnimationModal={this.state.scaleAnimationModal} setPopupState={this.setPopupState} />
                <View style={[styles.child, styles.inputContainer]}>
                    <TextInput
                        onChangeText={(oldPassword) => { this.setState({ oldPassword }) }}
                        value={this.state.oldPassword}
                        secureTextEntry={true}
                        placeholder={'Current Password'}
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
                            axios.put('http://192.168.1.102:3000/change-password', {
                                phone_number: this.props.user.phone_number, old_password: this.state.oldPassword, new_password: this.state.password
                            }).then(({ status }) => {
                                if (status === 200) {
                                    this.props.navigation.pop()
                                } else {
                                    console.log(status)
                                }
                            }).catch((reason) => {
                                console.log(reason)
                            })
                        }}>
                        <Text style={styles.resetPasswordText}>Change Password</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.child} />
                <View style={styles.child} />
                <View style={styles.child} />
                <View style={styles.child} />
                <View style={styles.child} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, marginVertical: RFValue(12, 600) },
    child: { flex: 1, margin: RFValue(3, 600) },
    inputContainer: { flexDirection: 'row' },
    input: {
        flex: 1, margin: RFValue(4, 600), borderRadius: RFValue(6, 600),
        paddingHorizontal: RFValue(12, 600), fontSize: RFValue(19, 600), borderWidth: .8, borderColor: '#ABABAB'
    },
    resetPasswordButton: {
        backgroundColor: '#5D3EBD', flex: 1, margin: RFValue(4, 600),
        borderRadius: RFValue(10, 600), alignItems: 'center', justifyContent: 'center'
    },
    resendContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    resendCodeText: { fontSize: RFValue(22, 600), paddingHorizontal: RFValue(12, 600), color: '#6E7586' },
    resetPasswordText: { color: 'white', fontSize: RFValue(19, 600) }
})

const mapStateToProps = ({
    reducer4: {
        user
    }
}) => ({
    user
})

export default connect(mapStateToProps)(ChangePasswordScreen)