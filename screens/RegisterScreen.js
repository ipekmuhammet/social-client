import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { ScrollView, View, StyleSheet, Alert } from 'react-native'
import axios from 'axios'
import { SERVER_URL } from 'react-native-dotenv'
import { Ionicons } from '@expo/vector-icons'

import TermsComponent from '../components/TermsComponent'
import ButtonComponent from '../components/ButtonComponent'
import InputComponent from '../components/InputComponent'
import InputIcon from '../components/InputIcon'

import joi from 'react-native-joi'

class RegisterScreen extends React.PureComponent {

    state = {
        // countryCode: '+90',
        phoneNumber: '',
        password: '',
        nameSurname: '',
        email: '',

        invalidPhoneNumber: false,
        invalidPassword: false,
        invalidNameSurname: false,
        invalidEmail: false,

        isPhoneNumberInitialized: false,
        isPasswordInitialized: false,
        isNameSurnameInitialized: false,
        isEmailInitialized: false
    }

    onRegisterClick = () => {
        axios.post(`${SERVER_URL}/send-activation-code`, { phone_number: this.state.phoneNumber }).then(res => {
            if (res.status === 202) {
                this.props.navigation.navigate('activationScreen', {
                    phone_number: this.state.phoneNumber,
                    password: this.state.password,
                    name_surname: this.state.nameSurname,
                    email: this.state.email
                })
            } else {
                Alert.alert('err')
            }
        })
    }

    /*
    joi.object({
        phone_number: joi.string().trim().strict().min(10).required(),
        password: joi.string().alphanum().min(4).required(),
        name_surname: joi.string().required(),
        email: joi.string().trim().strict().email().required()
    })
    */

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

    onNameSurnameChange = (nameSurname) => {
        joi.string().alphanum().validate(nameSurname, (err, val) => {
            this.setState({ nameSurname, isNameSurnameInitialized: true, invalidNameSurname: !!err })
        })
    }

    onEmailChange = (email) => {
        joi.string().trim().strict().email().validate(email, (err, val) => {
            this.setState({ email, isEmailInitialized: true, invalidEmail: !!err })
        })
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View>
                    {
                        //  <View style={styles.child}>
                        //      <TouchableOpacity
                        //          style={styles.facebookButton}
                        //          onPress={() => {
                        //              console.log('Connect with Facebook')
                        //          }}>
                        //          <Text style={styles.facebookText}>Connect with Facebook</Text>
                        //      </TouchableOpacity>
                        //  </View>
                    }

                    <InputComponent
                        options={{
                            keyboardType: 'phone-pad',
                            textContentType: 'telephoneNumber',
                            placeholder: 'Phone Number'
                        }}
                        invalid={this.state.invalidPhoneNumber && this.state.isPhoneNumberInitialized}
                        value={this.state.phoneNumber}
                        onChange={this.onPhoneChange}>

                        <InputIcon>
                            <Ionicons size={32} name={'md-phone-portrait'} color={
                                this.state.invalidPhoneNumber && this.state.isPhoneNumberInitialized ? 'red' : 'black'
                            } />
                        </InputIcon>

                    </InputComponent>

                    <InputComponent
                        options={{
                            secureTextEntry: true,
                            textContentType: 'password',
                            placeholder: 'Password (min 4 characters)'
                        }}
                        invalid={this.state.invalidPassword && this.state.isPasswordInitialized}
                        value={this.state.password}
                        onChange={this.onPasswordChange}>

                        <InputIcon>
                            <Ionicons size={32} name={'md-lock'} color={
                                this.state.invalidPassword && this.state.isPasswordInitialized ? 'red' : 'black'
                            } />
                        </InputIcon>

                    </InputComponent>

                    <InputComponent
                        options={{
                            textContentType: 'name',
                            placeholder: 'Name Surname'
                        }}
                        invalid={this.state.invalidNameSurname && this.state.isNameSurnameInitialized}
                        value={this.state.nameSurname}
                        onChange={this.onNameSurnameChange}>

                        <InputIcon>
                            <Ionicons size={32} name={'md-person'} color={
                                this.state.invalidNameSurname && this.state.isNameSurnameInitialized ? 'red' : 'black'
                            } />
                        </InputIcon>

                    </InputComponent>

                    <InputComponent
                        options={{
                            keyboardType: 'email-address',
                            textContentType: 'emailAddress',
                            placeholder: 'E-mail'
                        }}
                        invalid={this.state.invalidEmail && this.state.isEmailInitialized}
                        value={this.state.email}
                        onChange={this.onEmailChange}>

                        <InputIcon>
                            <Ionicons size={32} name={'md-mail-open'} color={
                                this.state.invalidEmail && this.state.isEmailInitialized ? 'red' : 'black'
                            } />
                        </InputIcon>

                    </InputComponent>

                    <TermsComponent />
                </View>

                <View>

                    {
                        //  <View style={[styles.child, { flexDirection: 'row' }]}>
                        //      <View style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
                        //          <CheckBox />
                        //      </View>
                        //      <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column', marginLeft: RFValue(8, 600) }}>
                        //          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        //              <Text style={{ color: 'black', fontSize: RFValue(16, 600), fontWeight: 'bold' }}>I give permissions for the use of my personal data for special offers and for receiving electronic communication, within the scope of The Law on Protection of Personal Data clarification document.</Text>
                        //              <Text style={{ color: '#5D3EBD', fontSize: RFValue(16, 600), fontWeight: 'bold' }}>the Terms and</Text>
                        //          </View>
                        //          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        //              <Text style={{ color: '#5D3EBD', fontSize: RFValue(16, 600), fontWeight: 'bold' }}>Conditions.</Text>
                        //          </View>
                        //      </View>
                        //  </View>
                    }
                    <View style={styles.buttonDivider} />

                    <ButtonComponent text={'Register'} onClick={this.onRegisterClick} disabled={
                        this.state.invalidEmail || !this.state.isEmailInitialized ||
                        this.state.invalidNameSurname || !this.state.isNameSurnameInitialized ||
                        this.state.invalidPassword || !this.state.isPasswordInitialized ||
                        this.state.invalidPhoneNumber || !this.state.isPhoneNumberInitialized
                    } />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'space-between', marginVertical: RFValue(12, 600) },
    facebookButton: {
        backgroundColor: '#3B589E', flex: 1, margin: RFValue(4, 600),
        borderRadius: 10, alignItems: 'center', justifyContent: 'center'
    },
    facebookText: { color: 'white', fontSize: RFValue(18, 600) },
    termsContainer: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' },
    checkBoxContainer: { alignItems: 'flex-start', justifyContent: 'flex-start' },
    checkBox: { backgroundColor: 'transparent' },
    termsText: { color: 'black', fontSize: RFValue(16, 600), fontWeight: 'bold' },
    termsLinkText: { color: '#5D3EBD', fontSize: RFValue(16, 600), fontWeight: 'bold' },
    termsTextContainer: { alignItems: 'center', justifyContent: 'center', flexDirection: 'row' },
    termsInfoContainer: { alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column', marginLeft: RFValue(8, 600) },
    buttonDivider: { height: RFValue(22, 600), backgroundColor: '#EDEEF0' },
    invalid: { borderColor: 'red' }
})

export default RegisterScreen