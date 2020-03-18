import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './HomeScreen'
import ProductScreen from './ProductsScreen'

const Stack = createStackNavigator()

const Screen1 = () => (
    <Stack.Navigator>
        <Stack.Screen name='home' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='products' component={ProductScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
)

export default Screen1