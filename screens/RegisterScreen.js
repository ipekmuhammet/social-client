import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { View, CheckBox, TouchableOpacity, TextInput, Text, StyleSheet, Alert } from 'react-native'
import axios from 'axios'

class RegisterScreen extends React.PureComponent {

    state = {
        // countryCode: '+90',
        phoneNumber: '905468133198',
        password: '1234',
        nameSurname: 'Muhammet İpek',
        email: 'muhammetipek57@hotmail.com'
    }

    render() {
        return (
            <View style={styles.container}>

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

                <View style={[styles.child, { flexDirection: 'row' }]}>
                    {
                        //  <TextInput
                        //      value={this.state.countryCode}
                        //      onChangeText={countryCode => { this.setState({ countryCode }) }}
                        //      placeholder={'Country/Region Code'}
                        //      style={styles.input} />
                    }

                    <TextInput
                        value={this.state.phoneNumber}
                        onChangeText={phoneNumber => { this.setState({ phoneNumber }) }}
                        textContentType={'telephoneNumber'}
                        placeholder={'Phone Number'}
                        keyboardType={'phone-pad'}
                        style={styles.input} />
                </View>

                <View style={styles.child}>
                    <TextInput
                        value={this.state.password}
                        onChangeText={password => { this.setState({ password }) }}
                        textContentType={'password'}
                        secureTextEntry={true}
                        placeholder={'Password (min 4 characters)'}
                        style={styles.input} />
                </View>
                <View style={styles.child}>
                    <TextInput
                        value={this.state.nameSurname}
                        onChangeText={nameSurname => { this.setState({ nameSurname }) }}
                        placeholder={'Name Surname'}
                        style={styles.input} />
                </View>

                <View style={styles.child}>
                    <TextInput
                        value={this.state.email}
                        onChangeText={email => { this.setState({ email }) }}
                        keyboardType={'email-address'}
                        textContentType={'emailAddress'}
                        placeholder={'E-mail'}
                        style={styles.input} />
                </View>

                <View style={styles.child} />

                <View style={[styles.child, styles.termsContainer]}>
                    <View style={styles.checkBoxContainer}>
                        <CheckBox style={styles.checkBox} />
                    </View>
                    <View style={styles.termsInfoContainer}>
                        <View style={styles.termsTextContainer}>
                            <Text style={styles.termsText}>I have read and accept </Text>
                            <Text style={styles.termsLinkText}>the Terms and</Text>
                        </View>
                        <View style={styles.termsTextContainer}>
                            <Text style={styles.termsLinkText}>Conditions.</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.child} />

                {
                    //  <View style={[styles.child, { flexDirection: 'row' }]}>
                    //      <View style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
                    //          <CheckBox />
                    //      </View>
                    //      <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column', marginLeft: RFValue(8, 600) }}>
                    //          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    //              <Text style={{ color: 'black', fontSize: RFValue(17, 600), fontWeight: 'bold' }}>I give permissions for the use of my personal data for special offers and for receiving electronic communication, within the scope of The Law on Protection of Personal Data clarification document.</Text>
                    //              <Text style={{ color: '#5D3EBD', fontSize: RFValue(17, 600), fontWeight: 'bold' }}>the Terms and</Text>
                    //          </View>
                    //          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    //              <Text style={{ color: '#5D3EBD', fontSize: RFValue(17, 600), fontWeight: 'bold' }}>Conditions.</Text>
                    //          </View>
                    //      </View>
                    //  </View>
                }

                <View style={styles.child}>
                    <TouchableOpacity
                        onPress={() => {
                            axios.post('http://192.168.1.102:3000/send-activation-code', { phone_number: this.state.phoneNumber }).then(res => {
                                if (res.status === 200) {
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
                        }}
                        style={styles.registerButton}>
                        <Text style={styles.registerText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, marginVertical: RFValue(12, 600) },
    child: { flex: 1, margin: RFValue(3, 600) },
    input: {
        flex: 1, margin: RFValue(4, 600), borderRadius: RFValue(6, 600),
        paddingHorizontal: RFValue(12, 600), fontSize: RFValue(19, 600),
        borderWidth: .8, borderColor: '#ABABAB'
    },
    facebookButton: {
        backgroundColor: '#3B589E', flex: 1, margin: RFValue(4, 600),
        borderRadius: RFValue(10, 600), alignItems: 'center', justifyContent: 'center'
    },
    registerButton: {
        backgroundColor: '#5D3EBD', flex: 1, margin: RFValue(4, 600),
        borderRadius: RFValue(10, 600), alignItems: 'center', justifyContent: 'center'
    },
    registerText: { color: 'white', fontSize: RFValue(19, 600) },
    facebookText: { color: 'white', fontSize: RFValue(19, 600) },
    termsContainer: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' },
    checkBoxContainer: { alignItems: 'flex-start', justifyContent: 'flex-start' },
    checkBox: { backgroundColor: 'transparent' },
    termsText: { color: 'black', fontSize: RFValue(17, 600), fontWeight: 'bold' },
    termsLinkText: { color: '#5D3EBD', fontSize: RFValue(17, 600), fontWeight: 'bold' },
    termsTextContainer: { alignItems: 'center', justifyContent: 'center', flexDirection: 'row' },
    termsInfoContainer: { alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column', marginLeft: RFValue(8, 600) }
})

export default RegisterScreen