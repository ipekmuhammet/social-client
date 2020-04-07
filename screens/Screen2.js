import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { CardStyleInterpolators } from '@react-navigation/stack'

import SearchScreen from './SearchScreen'

const Stack = createStackNavigator()

const Screen2 = () => (
    <Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
        <Stack.Screen
            name='search'
            options={{
                title: 'Search',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: styles.headerStyle
            }}
            component={SearchScreen} />
    </Stack.Navigator>
)

const styles = StyleSheet.create({
    headerStyle: { backgroundColor: '#5D3EBD' }
})

export default Screen2