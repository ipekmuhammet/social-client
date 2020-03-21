import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBarIcon from './TabBarIcon'

import Home from '../screens/Screen1'
import Search from '../screens/Screen2'
import Cart from '../screens/Screen3'
import ProfileScreen from '../screens/Screen4'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route), headerShown: false })

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>

      <BottomTab.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='md-home' />
        }}
      />

      <BottomTab.Screen
        name='Search'
        component={Search}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='md-search' />
        }}
      />

      <BottomTab.Screen
        name='Cart'
        component={Cart}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='md-cart' />
        }}
      />

      <BottomTab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='md-person' />
        }}
      />

    </BottomTab.Navigator>
  )
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

  switch (routeName) {
    case 'Home':
      return 'Home'
    case 'Search':
      return 'Search'
    case 'Cart':
      return 'Cart'
    case 'Profile':
      return 'Profile'
  }
}