import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'

const WelcomeScreen = ({ navigation }) => (
    <View style={styles.container}>
        <View style={{ flex: .9 }} />
        <View style={styles.child} />

        <View style={[styles.child, { flex: 4.2, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }]}>
            <Image style={{ flex: 1, borderWidth: 1, height: '100%' }} resizeMode={'contain'} source={{ uri: 'https://www.getir.com/img/bimutluluk.png' }} />
        </View>

        <View style={{ flex: .9 }} />

        <View style={styles.child}>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => {
                console.log('Continue without registration')
            }}>
                <Text style={{ color: '#6E7586', fontSize: 19, fontWeight: 'bold' }}>Continue Without Registration</Text>
            </TouchableOpacity>
        </View>

        <View style={[styles.child, { flex: 1.2 }]}>
            <TouchableOpacity
                style={{ backgroundColor: '#5D3EBD', flex: 1, margin: 4, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
                onPress={() => { navigation.navigate('register') }}>
                <Text style={{ color: 'white', fontSize: 19, fontWeight: 'bold' }}>Register</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.child}>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }} onPress={() => { navigation.navigate('login') }}>
                <Text style={{ color: '#6E7586', fontSize: 19, fontWeight: 'bold' }}>Do you have an account ?</Text>
                <Text style={{ color: '#5D3EBD', fontSize: 19, fontWeight: 'bold', marginHorizontal: 10 }}>Login</Text>
            </TouchableOpacity>
        </View>
    </View >
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    child: {
        flex: 1,
        margin: 5
    }
})

export default WelcomeScreen