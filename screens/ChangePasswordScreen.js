import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native'
import axios from 'axios'
import { RFValue } from 'react-native-responsive-fontsize'
import { Ionicons } from '@expo/vector-icons'
import { SERVER_URL } from 'react-native-dotenv'

import PasswordChangedPopup from '../components/popups/PasswordChangedPopup'
import MessagePopup from '../components/popups/MessagePopup'
import ButtonComponent from '../components/ButtonComponent'

class ChangePasswordScreen extends React.PureComponent {

    state = {
        oldPassword: '',
        password: '',
        scaleAnimationModal: false,
        samePasswordPopup: null,
        emptyPasswordPopup: null,
        invalidPasswordPopup: null
    }

    setPopupState = (state) => {
        this.setState({ scaleAnimationModal: state.scaleAnimationModal })

        if (!state.scaleAnimationModal) {
            this.props.navigation.pop()
        }
    }

    onChangePasswordClick = () => {
        if (this.state.oldPassword === '' || this.state.password === '') {

            this.state.emptyPasswordPopup.showMessage({ message: '' })

        } else if (this.state.password.length < 4) {

            this.state.invalidPasswordPopup.showMessage({ message: '' })

        } else if (this.state.oldPassword === this.state.password) {

            this.state.samePasswordPopup.showMessage({ message: '' })

        } else {

            axios.put(`${SERVER_URL}/user/change-password`, {
                phone_number: this.props.user.phone_number, old_password: this.state.oldPassword, new_password: this.state.password
            }).then(({ status }) => {
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

    render() {
        return (
            <ScrollView style={styles.container}>

                <PasswordChangedPopup scaleAnimationModal={this.state.scaleAnimationModal} setPopupState={this.setPopupState} />

                <MessagePopup
                    onRef={(ref) => {
                        this.setState({ samePasswordPopup: ref })
                    }}
                    text={'Yeni şifre eskisi ise aynı olamaz.'}>
                    <Ionicons name={'md-warning'} size={48} color={'red'} />
                </MessagePopup>

                <MessagePopup
                    onRef={(ref) => {
                        this.setState({ emptyPasswordPopup: ref })
                    }}
                    text={'Lütfen eski ve yeni şifre alanlarını doldurunuz.'}>
                    <Ionicons name={'md-warning'} size={48} color={'red'} />
                </MessagePopup>

                <MessagePopup
                    onRef={(ref) => {
                        this.setState({ invalidPasswordPopup: ref })
                    }}
                    text={'Yeni şifreniz en az 4 haneli olmalı.'}>
                    <Ionicons name={'md-warning'} size={48} color={'red'} />
                </MessagePopup>

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
                    <ButtonComponent text={'Change Password'} onClick={this.onChangePasswordClick} />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: { marginVertical: RFValue(12, 600) },
    child: { height: RFValue(60, 600), margin: RFValue(3, 600), zIndex: -1 },
    inputContainer: { flexDirection: 'row' },
    input: {
        flex: 1, margin: RFValue(4, 600), borderRadius: 6,
        paddingHorizontal: RFValue(12, 600), fontSize: RFValue(18, 600), borderWidth: .8, borderColor: '#ABABAB'
    },
    resendContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    resendCodeText: { fontSize: RFValue(20, 600), paddingHorizontal: RFValue(12, 600), color: '#6E7586' }
})

const mapStateToProps = ({
    reducer4: {
        user
    }
}) => ({
    user
})

export default connect(mapStateToProps)(ChangePasswordScreen)