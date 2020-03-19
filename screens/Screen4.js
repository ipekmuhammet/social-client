import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ProfileScreen from './ProfileScreen'
import AddressesScreen from './SettingsScreens/AddressesScreen'

const Stack = createStackNavigator()

const Screen3 = () => (
    <Stack.Navigator>
        <Stack.Screen name='profile' component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name='addresses' component={AddressesScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
)

export default Screen3
