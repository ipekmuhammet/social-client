import React from 'react'
import { View, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { CardStyleInterpolators } from '@react-navigation/stack'

import WelcomeScreen from './WelcomeScreen'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import ForgotPasswordScreen from './ForgotPasswordScreen'
import ResetPasswordScreen from './ResetPasswordScreen'
import ActivationScreen from './ActivationScreen'

const Stack = createStackNavigator()

const WelcomeStack = () => (
    <Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
        <Stack.Screen name='welcome' component={WelcomeScreen} options={{
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#5D3EBD' },
            headerTitle: () => (
                <View style={{ height: '100%', padding: 8, backgroundColor: '#5D3EBD', display: 'flex' }}>
                    <Image source={require('../assets/logo.png')} resizeMode={'contain'} style={{ flex: 1 }} />
                </View>
            )
        }} />

        <Stack.Screen name='login' component={LoginScreen} options={{
            title: 'Login',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#5D3EBD' }
        }} />

        <Stack.Screen name='signup' component={RegisterScreen} options={{
            title: 'Register',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#5D3EBD' }
        }} />

        <Stack.Screen name='forgotPassword' component={ForgotPasswordScreen} options={{
            title: 'Forgot Password',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#5D3EBD' }
        }} />

        <Stack.Screen name='resetPassword' component={ResetPasswordScreen} options={{
            title: 'Forgot Password',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#5D3EBD' }
        }} />

        <Stack.Screen name='activationScreen' component={ActivationScreen} options={{
            title: 'Activate Account',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#5D3EBD' }
        }} />

    </Stack.Navigator>
)

export default WelcomeStack