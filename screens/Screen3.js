import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import CartScreen from './CartScreen'
import ChoosePaymentScreen from './ChoosePaymentScreen'

const Stack = createStackNavigator()

function Screen3() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='cart' component={CartScreen} options={{ headerShown: false }} />
            <Stack.Screen name='choosePayment' component={ChoosePaymentScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Screen3