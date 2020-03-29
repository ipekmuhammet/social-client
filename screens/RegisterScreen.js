import React from 'react'
import { View, CheckBox, TouchableOpacity, TextInput, Text, StyleSheet, Alert } from 'react-native'
import axios from 'axios'

const RegisterScreen = ({ navigation }) => (
    <View style={styles.container}>

        <View style={styles.child}>
            <TouchableOpacity style={{ backgroundColor: '#3B589E', flex: 1, margin: 4, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }} onPress={() => { navigation.navigate('signup') }}>
                <Text style={{ color: 'white', fontSize: 19 }}>Connect with Facebook</Text>
            </TouchableOpacity>
        </View>

        <View style={[styles.child, { flexDirection: 'row' }]}>
            <TextInput placeholder={'Country/Region Code'} style={{ flex: 1, margin: 4, borderRadius: 6, paddingHorizontal: 12, fontSize: 19, borderWidth: .8, borderColor: '#ABABAB' }} />
            <TextInput placeholder={'Phone Number'} style={{ flex: 1, margin: 4, borderRadius: 6, paddingHorizontal: 12, fontSize: 19, borderWidth: .8, borderColor: '#ABABAB' }} />
        </View>

        <View style={styles.child}>
            <TextInput placeholder={'Password (min 4 characters)'} style={{ flex: 1, margin: 4, borderRadius: 6, paddingHorizontal: 12, fontSize: 19, borderWidth: .8, borderColor: '#ABABAB' }} />
        </View>

        <View style={styles.child}>
            <TextInput placeholder={'Name Surname'} style={{ flex: 1, margin: 4, borderRadius: 6, paddingHorizontal: 12, fontSize: 19, borderWidth: .8, borderColor: '#ABABAB' }} />
        </View>

        <View style={styles.child}>
            <TextInput placeholder={'E-mail'} style={{ flex: 1, margin: 4, borderRadius: 6, paddingHorizontal: 12, fontSize: 19, borderWidth: .8, borderColor: '#ABABAB' }} />
        </View>


        <View style={[styles.child, { flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }]}>
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
                    console.log('x')
                    axios.post('http://192.168.1.102:3000/send-activation-code', { phone_number: '905468133198' }).then(res => {
                        if (res.status === 200) {
                            navigation.navigate('activationScreen', { from: 'register' })
                        } else {
                            Alert.alert('err')
                        }
                    })
                }}
                style={{ backgroundColor: '#5D3EBD', flex: 1, margin: 4, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
            >
                <Text style={{ color: 'white', fontSize: 19 }}>Register</Text>
            </TouchableOpacity>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 12
    },
    child: {
        flex: 1,
        margin: 3
    }
})

export default RegisterScreen