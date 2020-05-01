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
import ChangeLanguageScreen from '../ChangeLanguageScreen'
import EditProfileScreen from '../EditProfileScreen'

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
                title: 'Şifremi değiştir',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: styles.headerStyle
            }} />

        <Stack.Screen
            name='searchAddressScreen'
            component={SearchAddressScreen}
            options={{
                title: 'Kart ekle',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: styles.headerStyle
            }} />

        <Stack.Screen
            name='pinAddressScreen'
            component={PinAddressScreen}
            options={{
                title: 'Adres ekle',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: styles.headerStyle
            }} />

        <Stack.Screen
            name='completeAddressScreen'
            component={CompleteAddressScreen}
            options={{
                title: 'Adres ekle',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: styles.headerStyle
            }} />

        <Stack.Screen
            name='paymentOptionsScreen'
            initialParams={{ navigation }}
            component={PaymentOptionsScreen}
            options={{
                headerLeft: () => <HeaderBackButton tintColor={'white'} onPress={() => { navigation.goBack() }} />,
                title: 'Ödeme Yöntemlerim',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: styles.headerStyle,
            }} />

        <Stack.Screen
            name='addNewCardScreen'
            component={AddNewCardScreen}
            options={{
                title: 'Kart ekle',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: styles.headerStyle
            }} />

        <Stack.Screen
            name='changeLanguageScreen'
            component={ChangeLanguageScreen}
            options={{
                title: 'Dili değiştir',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: styles.headerStyle
            }} />

        <Stack.Screen
            name='editProfileScreen'
            component={EditProfileScreen}
            options={{
                title: 'Profilim',
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
