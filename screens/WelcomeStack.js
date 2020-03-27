import React from 'react'
import { View, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import WelcomeScreen from './WelcomeScreen'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'
import ForgotPasswordScreen from './ForgotPasswordScreen'
import ResetPasswordScreen from './ResetPasswordScreen'

const Stack = createStackNavigator()

const WelcomeStack = () => (
    <Stack.Navigator>
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

        <Stack.Screen name='signup' component={SignupScreen} options={{
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
    </Stack.Navigator>
)

export default WelcomeStack