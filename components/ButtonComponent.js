import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const ButtonComponent = ({ text, onClick, opposite }) => (
    <View style={styles.container}>
        <TouchableOpacity
            onPress={onClick}
            style={[styles.button, opposite ? styles.opposite : {}]}>
            <Text style={[styles.text, opposite ? styles.opposite : {}]}>{text}</Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    container: { height: RFValue(60, 600), margin: RFValue(3, 600) },
    button: {
        backgroundColor: '#5D3EBD', borderWidth: 1, borderColor: '#5D3EBD', flex: 1,
        margin: RFValue(4, 600), borderRadius: 10, alignItems: 'center', justifyContent: 'center'
    },
    opposite: { backgroundColor: 'white', color: '#5D3EBD' },
    text: { color: 'white', fontSize: RFValue(18, 600) }
})

export default ButtonComponent