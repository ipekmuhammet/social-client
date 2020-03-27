import React from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const ResetPasswordScreen = () => (
    <View style={styles.container}>

        <View style={[styles.child, { flexDirection: 'row' }]}>
            <TextInput keyboardType={'phone-pad'} placeholder={'Country/Region Code'} style={{ flex: 1, margin: 4, borderRadius: 6, paddingHorizontal: 12, fontSize: 19, borderWidth: .8, borderColor: '#ABABAB' }} />
            <TextInput keyboardType={'phone-pad'} placeholder={'Phone Number'} style={{ flex: 1, margin: 4, borderRadius: 6, paddingHorizontal: 12, fontSize: 19, borderWidth: .8, borderColor: '#ABABAB' }} />
        </View>

        <View style={[styles.child, { flexDirection: 'row' }]}>
            <TextInput keyboardType={'number-pad'} placeholder={'Activation Code'} style={{ flex: 1, margin: 4, borderRadius: 6, paddingHorizontal: 12, fontSize: 19, borderWidth: .8, borderColor: '#ABABAB' }} />
        </View>

        <View style={[styles.child, { flexDirection: 'row' }]}>
            <TextInput keyboardType={'number-pad'} placeholder={'New Password (min 4 characters)'} style={{ flex: 1, margin: 4, borderRadius: 6, paddingHorizontal: 12, fontSize: 19, borderWidth: .8, borderColor: '#ABABAB' }} />
        </View>

        <View style={styles.child}>
            <TouchableOpacity style={{ backgroundColor: '#5D3EBD', flex: 1, margin: 4, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }} onPress={() => { navigation.navigate('signup') }}>
                <Text style={{ color: 'white', fontSize: 19 }}>Reset Password</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.child, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
            <Ionicons name={'md-refresh'} size={36} color={'#6E7586'} />
            <Text style={{ fontSize: 24, paddingHorizontal: 12, color: '#6E7586' }}>Resend Code</Text>
        </View>
        <View style={styles.child} />
        <View style={styles.child} />
        <View style={styles.child} />
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

export default ResetPasswordScreen