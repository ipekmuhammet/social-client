import React from 'react'
import { ScrollView, StyleSheet, AsyncStorage } from 'react-native'
import axios from 'axios'
import { RFValue } from 'react-native-responsive-fontsize'
import { SERVER_URL } from 'react-native-dotenv'
import joi from 'react-native-joi'

import ButtonComponent from '../components/ButtonComponent'
import InputComponent from '../components/InputComponent'

class ActivationScreen extends React.PureComponent {

    state = {
        activationCode: '',
        invalidActivationCode: false,
        isActivationCodeInitialized: false
    }

    onRegisterClick = () => {
        axios.post(`${SERVER_URL}/register`, { ...this.props.route.params, activation_code: this.state.activationCode }).then(res => {
            if (res.status === 200) {
                AsyncStorage.multiSet([['token', res.data.token], ['user', JSON.stringify(res.data.user)]]).then((res) => {
                    this.props.navigation.navigate('Loading')
                })
            } else {
                // Alert.alert('err') // TODO
            }
        }).catch((err) => {
            // Alert.alert('err', JSON.stringify(err)) // TODO
        })
    }

    onActivationCodeChange = (activationCode) => {
        joi.string().trim().strict().min(4).max(4).validate(activationCode, (err, val) => {
            this.setState({ activationCode: val, isActivationCodeInitialized: true, invalidActivationCode: !!err })
        })
    }

    render() {
        return (
            <ScrollView style={styles.container}>

                <InputComponent
                    value={this.state.activationCode}
                    onChange={this.onActivationCodeChange}
                    invalid={this.state.invalidActivationCode && this.state.isActivationCodeInitialized}
                    options={{
                        keyboardType: 'number-pad',
                        placeholder: 'Activation Code'
                    }} />

                <ButtonComponent
                    disabled={this.state.invalidActivationCode || !this.state.isActivationCodeInitialized}
                    text={'Register'}
                    onClick={this.onRegisterClick} />

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: { marginVertical: RFValue(12, 600) }
})

export default ActivationScreen