import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const ButtonComponent = ({ text, onClick, opposite }) => (
    <TouchableOpacity
        onPress={onClick}
        style={[styles.button, opposite ? styles.opposite : {}]}>
        <Text style={[styles.text, opposite ? styles.opposite : {}]}>{text}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#5D3EBD', borderWidth: 1, borderColor: '#5D3EBD', height: 60, flex: 1,
        margin: RFValue(4, 600), borderRadius: 10, alignItems: 'center', justifyContent: 'center'
    },
    opposite: { backgroundColor: 'white', color: '#5D3EBD' },
    text: { color: 'white', fontSize: RFValue(18, 600) }
})

export default ButtonComponent