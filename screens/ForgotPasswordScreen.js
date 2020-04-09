import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native'

class ForgotPasswordScreen extends React.Component {

    state = {
        phoneNumber: '905468133198'
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.child, styles.inputContainer]}>
                    {
                        //  <TextInput
                        //      keyboardType={'phone-pad'} placeholder={'Country/Region Code'}
                        //      style={styles.input} />
                    }

                    <TextInput
                        onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                        value={this.state.phoneNumber}
                        keyboardType={'phone-pad'}
                        placeholder={'Phone Number'}
                        style={styles.input} />
                </View>
                <View style={styles.child}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('resetPassword') }}
                        style={styles.sendCodeButton}>
                        <Text style={styles.sendCodeText}>Send Code</Text>
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
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, marginVertical: RFValue(12, 600) },
    child: { flex: 1, margin: RFValue(3, 600) },
    inputContainer: { flexDirection: 'row' },
    input: {
        flex: 1, margin: RFValue(4, 600), borderRadius: RFValue(6, 600),
        paddingHorizontal: RFValue(12, 600), fontSize: RFValue(19, 600), borderWidth: .8, borderColor: '#ABABAB'
    },
    sendCodeButton: {
        backgroundColor: '#5D3EBD', flex: 1, margin: RFValue(4, 600),
        borderRadius: RFValue(10, 600), alignItems: 'center', justifyContent: 'center'
    },
    sendCodeText: { color: 'white', fontSize: RFValue(19, 600) }
})

export default ForgotPasswordScreen