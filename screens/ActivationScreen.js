import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { ScrollView, View, TouchableOpacity, TextInput, Text, StyleSheet, AsyncStorage, Alert } from 'react-native'
import axios from 'axios'
import { SERVER_URL } from 'react-native-dotenv'

class ActivationScreen extends React.PureComponent {

    state = {
        activationCode: ''
    }

    render() {
        return (
            <ScrollView style={styles.container}>

                <View style={styles.child}>
                    <TextInput
                        value={this.state.activationCode}
                        onChangeText={(activationCode) => { this.setState({ activationCode }) }}
                        keyboardType={'number-pad'}
                        placeholder={'Activation Code'}
                        style={styles.activationCodeInput} />
                </View>

                <View style={styles.child}>
                    <TouchableOpacity
                        onPress={() => {
                            axios.post(`${SERVER_URL}/register`, { ...this.props.route.params, activation_code: this.state.activationCode }).then(res => {
                                if (res.status === 200) {
                                    AsyncStorage.multiSet([['token', res.data.token], ['user', JSON.stringify(res.data.user)]]).then((res) => {
                                        this.props.navigation.navigate('Loading')
                                    })
                                } else {
                                    Alert.alert('err')
                                }
                            }).catch((err) => {
                                Alert.alert('err', JSON.stringify(err))
                            })
                        }}
                        style={styles.registerButton}
                    >
                        <Text style={styles.registerText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: { marginVertical: RFValue(12, 600) },
    child: { height: RFValue(60, 600), margin: RFValue(3, 600) },
    activationCodeInput: {
        flex: 1, margin: RFValue(4, 600), borderRadius: 6,
        paddingHorizontal: RFValue(12, 600), fontSize: RFValue(18, 600), borderWidth: .8, borderColor: '#ABABAB'
    },
    registerButton: {
        backgroundColor: '#5D3EBD', flex: 1, margin: RFValue(4, 600),
        borderRadius: 10, alignItems: 'center', justifyContent: 'center'
    },
    registerText: { color: 'white', fontSize: RFValue(18, 600) }
})

export default ActivationScreen