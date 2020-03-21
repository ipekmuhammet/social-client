import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ProfileScreen from './ProfileScreen'
import AddressesScreen from './SettingsScreens/AddressesScreen'

const Stack = createStackNavigator()

const Screen3 = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='profile'
            component={ProfileScreen}
            options={{
                title: 'Diğer',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#5D3EBD' }
            }} />

        <Stack.Screen
            name='addresses'
            component={AddressesScreen}
            options={{
                title: 'Adreslerim',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#5D3EBD' }
            }} />
    </Stack.Navigator>
)

export default Screen3
