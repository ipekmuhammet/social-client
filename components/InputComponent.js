import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const InputComponent = ({ value, onChange, options, children: icon, invalid }) => (
    <View style={styles.container}>
        {
            icon
        }
        <TextInput
            {...options}
            value={value}
            onChangeText={onChange}
            placeholderTextColor={invalid ? 'red' : '#C7C7CD'}
            style={[
                styles.input,
                invalid ? styles.invalid : {},
                icon ? styles.withIcon : {}
            ]} />
    </View>
)

const styles = StyleSheet.create({
    container: { height: RFValue(60, 600), margin: RFValue(3, 600), flexDirection: 'row' },
    input: {
        flex: 1, margin: RFValue(4, 600), zIndex: -1, borderRadius: 10, paddingHorizontal: RFValue(12, 600),
        fontSize: RFValue(18, 600), borderWidth: .8, borderColor: '#CDCDCD'
    },
    withIcon: { paddingLeft: RFValue(48, 600) },
    invalid: { borderColor: 'red', borderWidth: 1.2 }
})

export default InputComponent