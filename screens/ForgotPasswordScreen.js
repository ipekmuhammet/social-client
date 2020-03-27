import React from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native'

const ForgotPasswordScreen = ({ navigation }) => (
    <View style={styles.container}>
        <View style={[styles.child, { flexDirection: 'row' }]}>
            <TextInput keyboardType={'phone-pad'} placeholder={'Country/Region Code'} style={{ flex: 1, margin: 4, borderRadius: 6, paddingHorizontal: 12, fontSize: 19, borderWidth: .8, borderColor: '#ABABAB' }} />
            <TextInput keyboardType={'phone-pad'} placeholder={'Phone Number'} style={{ flex: 1, margin: 4, borderRadius: 6, paddingHorizontal: 12, fontSize: 19, borderWidth: .8, borderColor: '#ABABAB' }} />
        </View>
        <View style={styles.child}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('resetPassword') }}
                style={{ backgroundColor: '#5D3EBD', flex: 1, margin: 4, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 19 }}>Send Code</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.child} />
        <View style={styles.child} />
        <View style={styles.child} />
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

export default ForgotPasswordScreen