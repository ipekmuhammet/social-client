import React from 'react'
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
    text: { fontSize: 24, paddingVertical: 30, fontWeight: '700', color: '#5D3EBD' }
})

export default LoadingComponent