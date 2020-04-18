import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { View, Image, Text, StyleSheet } from 'react-native'

const LoadingComponent = () => (
    <View style={styles.container}>
        <View style={styles.center}>
            <Image source={require('../assets/loading.gif')} />
            <Text style={styles.text}>Lütfen bekleyin.</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: { alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', display: 'flex', flex: 1 },
    center: { alignItems: 'center', justifyContent: 'center', flexDirection: 'column' },
    text: {
        fontSize: RFValue(23, 600),
        paddingVertical: RFValue(30, 600), fontWeight: 'bold', color: '#5D3EBD'
    }
})

export default LoadingComponent