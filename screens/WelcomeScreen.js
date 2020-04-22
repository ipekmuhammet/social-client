import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'

import ButtonComponent from '../components/ButtonComponent'

const WelcomeScreen = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.empty} />
        <View style={styles.child} />

        <View style={[styles.child, styles.imageContainer]}>
            <Image style={styles.image} resizeMode={'contain'} source={{ uri: 'https://www.getir.com/img/bimutluluk.png' }} />
        </View>

        <View style={styles.empty} />

        <View style={styles.child}>
            <TouchableOpacity style={styles.continueWithRegistration} onPress={() => {
                navigation.navigate('Loading', { next: true })
            }}>
                <Text style={styles.buttonText}>Continue Without Registration</Text>
            </TouchableOpacity>
        </View>

        <ButtonComponent text={'Register'} onClick={() => {
            navigation.navigate('register')
        }} />

        <View style={styles.child}>
            <TouchableOpacity style={styles.goToLoginPageContainer} onPress={() => { navigation.navigate('login') }}>
                <Text style={styles.buttonText}>Do you have an account ?</Text>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
    </View >
)

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'column' },
    empty: { flex: .9 },
    imageContainer: { flex: 4.2, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' },
    image: { flex: 1, borderWidth: 1, height: '100%' },
    child: { flex: 1, margin: RFValue(5, 600) },
    continueWithRegistration: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    buttonText: { color: '#6E7586', fontSize: RFValue(20, 600) },
    goToLoginPageContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' },
    loginText: {
        color: '#5D3EBD', fontSize: RFValue(18, 600),
        marginHorizontal: RFValue(10, 600)
    }
})

export default WelcomeScreen