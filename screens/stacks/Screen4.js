import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
import { CardStyleInterpolators } from '@react-navigation/stack'

import ProfileScreen from '../ProfileScreen'
import ChangePasswordScreen from '../ChangePasswordScreen'
import AddressesScreen from '../SettingsScreens/AddressesScreen'
import SearchAddressScreen from '../AddressScreens/SearchAddressScreen'
import PinAddressScreen from '../AddressScreens/PinAddressScreen'
import CompleteAddressScreen from '../AddressScreens/CompleteAddressScreen'
import PaymentOptionsScreen from '../PaymentOptionsScreens/PaymentOptionsScreen'
import AddNewCardScreen from '../PaymentOptionsScreens/AddNewCardScreen'

const Stack = createStackNavigator()

const Screen4 = ({ navigation }) => (
    <Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
        <Stack.Screen
            name='profile'
            component={ProfileScreen}
            options={{
                title: 'Diğer',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: styles.headerStyle
            }} />

        <Stack.Screen
            name='addresses'
            initialParams={{ navigation }}
            component={AddressesScreen}
            options={{
                headerLeft: () => <HeaderBackButton tintColor={'white'} onPress={() => { navigation.goBack() }} />,
                title: 'Adreslerim',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: styles.headerStyle
            }} />

        <Stack.Screen
            name='changePasswordScreen'
            component={ChangePasswordScreen}
            options={{
                title: 'Adreslerim',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: styles.headerStyle
            }} />

        <Stack.Screen name='searchAddressScreen'
            component={SearchAddressScreen}
            options={{
                title: 'Add New Address',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: styles.headerStyle
            }} />

        <Stack.Screen name='pinAddressScreen'
            component={PinAddressScreen}
            options={{
                title: 'Add New Address',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: styles.headerStyle
            }} />

        <Stack.Screen name='completeAddressScreen'
            component={CompleteAddressScreen}
            options={{
                title: 'Add New Address',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: styles.headerStyle
            }} />

        <Stack.Screen name='paymentOptionsScreen'
            initialParams={{ navigation }}
            component={PaymentOptionsScreen}
            options={{
                headerLeft: () => <HeaderBackButton tintColor={'white'} onPress={() => { navigation.goBack() }} />,
                title: 'Payment Options',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: styles.headerStyle,
            }} />

        <Stack.Screen name='addNewCardScreen'
            component={AddNewCardScreen}
            options={{
                title: 'Add New Card',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: styles.headerStyle
            }} />

    </Stack.Navigator>
)

const styles = StyleSheet.create({
    headerStyle: { backgroundColor: '#5D3EBD' }
})

export default Screen4
