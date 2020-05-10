import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const TabBarIcon = ({ name, focused }) => (
	<Ionicons
		name={name}
		size={28}
		style={{ marginBottom: -3 }}
		color={focused ? '#5D3EBD' : '#CCC'}
	/>
)

export default TabBarIcon
