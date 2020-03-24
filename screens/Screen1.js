import React from 'react'
import { View, Image } from 'react-native'
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
					<Image source={{ uri: `http://192.168.1.102:3000/assets/logo.png` }} resizeMode={'contain'} style={{ flex: 1 }} />
				</View>
			)
		}} />
		<Stack.Screen
			name='products'
			options={{
				title: 'Products',
				headerTitleAlign: 'center',
				headerTintColor: 'white',
				headerStyle: { backgroundColor: '#5D3EBD' }
			}}
			component={ProductScreen} />
	</Stack.Navigator>
)

export default Screen1