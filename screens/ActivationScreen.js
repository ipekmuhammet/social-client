import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { ScrollView, View, TouchableOpacity, TextInput, Text, StyleSheet, AsyncStorage, Alert } from 'react-native'
import axios from 'axios'
import { SERVER_URL } from 'react-native-dotenv'
import ButtonComponent from '../components/ButtonComponent'

class ActivationScreen extends React.PureComponent {

    state = {
        activationCode: ''
    }

    onRegisterClick = () => {
        axios.post(`${SERVER_URL}/register`, { ...this.props.route.params, activation_code: this.state.activationCode }).then(res => {
            if (res.status === 200) {
                AsyncStorage.multiSet([['token', res.data.token], ['user', JSON.stringify(res.data.user)]]).then((res) => {
                    this.props.navigation.navigate('Loading')
                })
            } else {
                Alert.alert('err') // TODO
            }
        }).catch((err) => {
            Alert.alert('err', JSON.stringify(err)) // TODO
        })
    }

    onActivationCodeChange = (activationCode) => {
        this.setState({ activationCode })
    }

    render() {
        return (
            <ScrollView style={styles.container}>

                <View style={styles.child}>
                    <TextInput
                        value={this.state.activationCode}
                        onChangeText={this.onActivationCodeChange}
                        keyboardType={'number-pad'}
                        placeholder={'Activation Code'}
                        style={styles.activationCodeInput} />
                </View>

                <ButtonComponent text={'Register'} onClick={this.onRegisterClick} />
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
    }
})

export default ActivationScreen