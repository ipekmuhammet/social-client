import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const InputComponent = ({ value, onChange, options, children: icon }) => (
    <View style={styles.container}>
        {
            icon
        }
        <TextInput
            {...options}
            value={value}
            onChangeText={onChange}
            style={[styles.input, icon ? styles.withIcon : {}]} />
    </View>
)

const styles = StyleSheet.create({
    container: { height: RFValue(60, 600), margin: RFValue(3, 600), flexDirection: 'row' },
    input: {
        flex: 1, margin: RFValue(4, 600), zIndex: -1, borderRadius: 10, paddingHorizontal: RFValue(12, 600),
        fontSize: RFValue(18, 600), borderWidth: .8, borderColor: '#ABABAB'
    },
    withIcon: { paddingLeft: RFValue(48, 600) }
})

export default InputComponent