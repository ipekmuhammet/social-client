import React from 'react'
import { View, TouchableOpacity, TextInput, Text, StyleSheet, AsyncStorage, Alert } from 'react-native'
import axios from 'axios'

class ActivationScreen extends React.PureComponent {

    state = {
        activationCode: ''
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.child}>
                    <TextInput
                        value={this.state.activationCode}
                        onChangeText={(activationCode) => { this.setState({ activationCode }) }}
                        keyboardType={'number-pad'}
                        placeholder={'Activation Code'}
                        style={{ flex: 1, margin: 4, borderRadius: 6, paddingHorizontal: 12, fontSize: 19, borderWidth: .8, borderColor: '#ABABAB' }} />
                </View>

                <View style={styles.child}>
                    <TouchableOpacity
                        onPress={() => {
                            axios.post(`http://192.168.1.102:3000/${this.props.route.params.from}`, { phone_number: '905468133198', activation_code: this.state.activationCode }).then(res => {
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
                        style={{ backgroundColor: '#5D3EBD', flex: 1, margin: 4, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Text style={{ color: 'white', fontSize: 19 }}>Register</Text>
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
    container: {
        flex: 1,
        marginVertical: 12
    },
    child: {
        flex: 1,
        margin: 3
    }
})

export default ActivationScreen