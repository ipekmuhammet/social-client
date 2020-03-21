import React from 'react'
import { View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './HomeScreen'
import ProductScreen from './ProductsScreen'

const Stack = createStackNavigator()

const Screen1 = () => (
    <Stack.Navigator>
        <Stack.Screen name='home' component={HomeScreen} options={{
            headerTitleAlign: 'center',
            headerTitle: () => (
                <View style={{ height: '100%', padding: 8, backgroundColor: '#5D3EBD', display: 'flex' }}>
                    <Image source={require('../assets/logo.png')} resizeMode={'contain'} style={{ flex: 1 }} />
                </View>
            )
        }} />
        <Stack.Screen
            name='products'
            options={{
                header: props =>
                    <View style={{ backgroundColor: '#5D3EBD', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
                        <Text style={{ fontSize: 20, paddingHorizontal: 12, color: 'white', fontWeight: 'bold' }}>{props.scene.route.params.title}</Text>
                    </View>
            }}
            component={ProductScreen} />
    </Stack.Navigator>
)

export default Screen1