import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'

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

        <View style={[styles.child, styles.registerButtonContainer]}>
            <TouchableOpacity
                style={styles.registerButton}
                onPress={() => { navigation.navigate('register') }}>
                <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
        </View>

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
    registerButtonContainer: { flex: 1.2 },
    registerButton: {
        backgroundColor: '#5D3EBD', flex: 1, margin: RFValue(4, 600),
        borderRadius: 10, alignItems: 'center', justifyContent: 'center'
    },
    continueWithRegistration: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    buttonText: { color: '#6E7586', fontSize: RFValue(19, 600), fontWeight: 'bold' },
    registerButtonText: { color: 'white', fontSize: RFValue(19, 600), fontWeight: 'bold' },
    goToLoginPageContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' },
    loginText: {
        color: '#5D3EBD', fontSize: RFValue(19, 600), fontWeight: 'bold',
        marginHorizontal: RFValue(10, 600)
    }
})

export default WelcomeScreen