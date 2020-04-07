import React from 'react'
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


                <View style={[styles.child, { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }]}>
                    <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                        <CheckBox style={{ backgroundColor: 'transparent' }} />
                    </View>
                    <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column', marginLeft: 8 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>I have read and accept </Text>
                            <Text style={{ color: '#5D3EBD', fontSize: 17, fontWeight: 'bold' }}>the Terms and</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <Text style={{ color: '#5D3EBD', fontSize: 17, fontWeight: 'bold' }}>Conditions.</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.child} />

                {
                    //  <View style={[styles.child, { flexDirection: 'row' }]}>
                    //      <View style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
                    //          <CheckBox />
                    //      </View>
                    //      <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column', marginLeft: 8 }}>
                    //          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    //              <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>I give permissions for the use of my personal data for special offers and for receiving electronic communication, within the scope of The Law on Protection of Personal Data clarification document.</Text>
                    //              <Text style={{ color: '#5D3EBD', fontSize: 17, fontWeight: 'bold' }}>the Terms and</Text>
                    //          </View>
                    //          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    //              <Text style={{ color: '#5D3EBD', fontSize: 17, fontWeight: 'bold' }}>Conditions.</Text>
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
    container: { flex: 1, marginVertical: 12 },
    child: { flex: 1, margin: 3 },
    input: { flex: 1, margin: 4, borderRadius: 6, paddingHorizontal: 12, fontSize: 19, borderWidth: .8, borderColor: '#ABABAB' },
    facebookButton: { backgroundColor: '#3B589E', flex: 1, margin: 4, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    registerButton: { backgroundColor: '#5D3EBD', flex: 1, margin: 4, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    registerText: { color: 'white', fontSize: 19 },
    facebookText: { color: 'white', fontSize: 19 }
})

export default RegisterScreen