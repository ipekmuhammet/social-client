import React from 'react'
import axios from 'axios'
import { View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native'

const LoginScreen = ({ navigation }) => (
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
            <TouchableOpacity
                style={{ backgroundColor: '#5D3EBD', flex: 1, margin: 4, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
                onPress={() => {
                    axios.post('http://192.168.1.102:3000/send-activation-code', { phone_number: '905468133198' }).then(res => {
                        if (res.status === 200) {
                            navigation.navigate('activationScreen', { from: 'login' })
                        } else {
                            Alert.alert('err')
                        }
                    })
                }}>
                <Text style={{ color: 'white', fontSize: 19 }}>Login</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.child}>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => { navigation.navigate('forgotPassword') }}>
                <Text style={{ color: '#6E7586', fontSize: 19, fontWeight: 'bold' }}>Forgot Password</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.child} />
        <View style={styles.child} />

        <View style={styles.child}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('signup') }}
                style={{ backgroundColor: 'white', borderWidth: 1, borderColor: '#5D3EBD', flex: 1, margin: 4, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
            >
                <Text style={{ color: '#5D3EBD', fontSize: 19, fontWeight: 'bold' }}>Register</Text>
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

export default LoginScreen