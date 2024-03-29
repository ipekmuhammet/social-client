import React from 'react'
import {
	TouchableOpacity, Text, StyleSheet
} from 'react-native'
import axios from 'axios'
import { RFValue } from 'react-native-responsive-fontsize'
import joi from 'react-native-joi'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'

import { SERVER_URL } from '../utils/global'
import ButtonComponent from '../components/ButtonComponent'
import InputComponent from '../components/InputComponent'
import ShadowContainer from '../components/ShadowContainer'

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
		const url = `${SERVER_URL}/send-activation-code`

		axios.post(url, {
			phoneNumber: this.props.route.params.phoneNumber,
			activationCodeType: 0, // REGISTER
		})
	}

	render() {
		return (
			<ShadowContainer>

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

			</ShadowContainer>
		)
	}
}

const styles = StyleSheet.create({
	resendContainer: {
		flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 12
	},
	resendCodeText: { fontSize: RFValue(19, 600), paddingHorizontal: RFValue(12, 600), color: '#6E7586' }
})

const mapDistachToProps = {
	register
}

export default connect(null, mapDistachToProps)(ActivationScreen)
