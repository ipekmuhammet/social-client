import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SearchScreen from './SearchScreen'

const Stack = createStackNavigator()

const Screen2 = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='search'
            options={{
                title: 'Search',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#5D3EBD' }
            }}
            component={SearchScreen} />
    </Stack.Navigator>
)

export default Screen2