import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import CartScreen from './CartScreen'
import ChoosePaymentScreen from './ChoosePaymentScreen'
import CompletePaymentScreen from './CompletePaymentScreen'
import OnlinePaymentScreen from './OnlinePaymentScreen'

const Stack = createStackNavigator()

const Screen3 = () => (
    <Stack.Navigator>
        <Stack.Screen
            name='cart'
            component={CartScreen}
            options={{
                title: 'Cart',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#5D3EBD' }
            }}
        />

        <Stack.Screen
            name='completePayment'
            component={CompletePaymentScreen}
            options={{
                title: 'Checkout',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#5D3EBD' }
            }}
        />

        <Stack.Screen
            name='choosePayment'
            component={ChoosePaymentScreen}
            options={{
                title: 'Ödeme Şekli',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#5D3EBD' }
            }} />

        <Stack.Screen
            name='onlinePaymentScreen'
            component={OnlinePaymentScreen}
            options={{
                title: 'Online Kredi/Banka Kartı',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#5D3EBD' }
            }}
        />
    </Stack.Navigator>
)

export default Screen3