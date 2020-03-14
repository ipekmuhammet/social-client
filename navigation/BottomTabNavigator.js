import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBarIcon from './TabBarIcon'
import HomeScreen from '../screens/Screen1'
import LinksScreen from '../screens/Screen2'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) })

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Get Started',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='md-code-working' />
        }}
      />
      <BottomTab.Screen
        name='Links'
        component={LinksScreen}
        options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='md-book' />
        }}
      />
    </BottomTab.Navigator>
  )
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

  switch (routeName) {
    case 'Home':
      return 'How to get started'
    case 'Links':
      return 'Links to learn more'
  }
}