import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { View, Image, StyleSheet  } from 'react-native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import HomeScreen from '../HomeScreen'
import ProductScreen from '../ProductsScreen'

const Stack = createStackNavigator()

const Screen1 = () => (
	<Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
		<Stack.Screen name='home' component={HomeScreen} options={{
			headerTitleAlign: 'center',
			headerStyle: styles.headerStyle,
			headerTitle: () => (
				<View style={styles.headerTitle}>
					<Image source={require('../../assets/logo.png')} resizeMode={'contain'} style={styles.headerImage} />
				</View>
			)
		}} />
		<Stack.Screen
			name='products'
			options={{
				title: 'Products',
				headerTitleAlign: 'center',
				headerTintColor: 'white',
				headerStyle: styles.headerStyle
			}}
			component={ProductScreen} />
	</Stack.Navigator>
)

const styles = StyleSheet.create({
	headerStyle: { backgroundColor: '#5D3EBD' },
	headerTitle: { height: '100%', padding: RFValue(8, 600), backgroundColor: '#5D3EBD', display: 'flex' },
	headerImage: { flex: 1 }
})

export default Screen1