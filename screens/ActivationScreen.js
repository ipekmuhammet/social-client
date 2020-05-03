import React from 'react'
import {
	ScrollView, TouchableOpacity, Text, StyleSheet,
} from 'react-native'
import axios from 'axios'
import { RFValue } from 'react-native-responsive-fontsize'
import { SERVER_URL } from 'react-native-dotenv'
import joi from 'react-native-joi'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'

import ButtonComponent from '../components/ButtonComponent'
import InputComponent from '../components/InputComponent'

import { register } from '../actions/actions4'

class ActivationScreen extends React.PureComponent {
	state = {
		activationCode: '',
		invalidActivationCode: false,
		isActivationCodeInitialized: false,
	}

	onRegisterClick = () => {
		this.props.register({ ...this.props.route.params, activationCode: this.state.activationCode }, () => {
			this.props.navigation.navigate('Loading', { next: true })
		})
	}

	onActivationCodeChange = (activationCode) => {
		joi.string().trim().strict().min(4)
			.max(4)
			.validate(activationCode, (err, val) => {
				this.setState({ activationCode: val, isActivationCodeInitialized: true, invalidActivationCode: !!err })
			})
	}

	onResendClick = () => {
		axios.post(`${SERVER_URL}/send-activation-code`, {
			phoneNumber: this.props.route.params.phoneNumber, activationCodeType: 0, // REGISTER
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
						placeholder: 'Aktivasyon kodu',
						maxLength: 4,
					}}
				/>

				<ButtonComponent
					disabled={this.state.invalidActivationCode || !this.state.isActivationCodeInitialized}
					text="Kayıt ol"
					onClick={this.onRegisterClick}
				/>

				<TouchableOpacity style={styles.resendContainer} onPress={this.onResendClick}>
					<Ionicons name="md-refresh" size={28} color="#6E7586" />
					<Text style={styles.resendCodeText}>Yeniden gönder</Text>
				</TouchableOpacity>

			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: { marginVertical: RFValue(12, 600) },
	resendContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
	resendCodeText: { fontSize: RFValue(19, 600), paddingHorizontal: RFValue(12, 600), color: '#6E7586' },
})

const mapDistachToProps = {
	register,
}

export default connect(null, mapDistachToProps)(ActivationScreen)
