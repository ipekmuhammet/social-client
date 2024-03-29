import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { View, Image, StyleSheet } from 'react-native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'


import WelcomeScreen from '../WelcomeScreen'
import LoginScreen from '../LoginScreen'
import RegisterScreen from '../RegisterScreen'
import ForgotPasswordScreen from '../ForgotPasswordScreen'
import ResetPasswordScreen from '../ResetPasswordScreen'
import ActivationScreen from '../ActivationScreen'

import logo from '../../assets/logo.png'

const Stack = createStackNavigator()

const WelcomeStack = () => (
	<Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
		<Stack.Screen
			name="welcome"
			component={WelcomeScreen}
			options={{
				headerTitleAlign: 'center',
				headerStyle: styles.headerStyle,
				headerTitle: () => (
					<View style={styles.headerTitle}>
						<Image source={logo} resizeMode="contain" style={styles.headerImage} />
					</View>
				),
			}}
		/>

		<Stack.Screen
			name="login"
			component={LoginScreen}
			options={{
				title: 'Giriş yap',
				headerTitleAlign: 'center',
				headerTintColor: 'white',
				headerStyle: styles.headerStyle
			}}
		/>

		<Stack.Screen
			name="register"
			component={RegisterScreen}
			options={{
				title: 'Kayıt ol',
				headerTitleAlign: 'center',
				headerTintColor: 'white',
				headerStyle: styles.headerStyle
			}}
		/>

		<Stack.Screen
			name="forgotPassword"
			component={ForgotPasswordScreen}
			options={{
				title: 'Şifremi unuttum',
				headerTitleAlign: 'center',
				headerTintColor: 'white',
				headerStyle: styles.headerStyle
			}}
		/>

		<Stack.Screen
			name="resetPassword"
			component={ResetPasswordScreen}
			options={{
				title: 'Şifremi unuttum',
				headerTitleAlign: 'center',
				headerTintColor: 'white',
				headerStyle: styles.headerStyle
			}}
		/>

		<Stack.Screen
			name="activationScreen"
			component={ActivationScreen}
			options={{
				title: 'Aktivasyon',
				headerTitleAlign: 'center',
				headerTintColor: 'white',
				headerStyle: styles.headerStyle
			}}
		/>
	</Stack.Navigator>
)

const styles = StyleSheet.create({
	headerStyle: { backgroundColor: '#5D3EBD' },
	headerTitle: {
		height: '100%', padding: RFValue(8, 600), backgroundColor: '#5D3EBD', display: 'flex'
	},
	headerImage: { flex: 1 }
})

export default WelcomeStack
