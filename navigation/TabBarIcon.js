import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const TabBarIcon = ({ name, focused }) => (
	<Ionicons
		name={name}
		size={28}
		style={{ marginBottom: -3 }}
		color={focused ? '#5D3EBD' : '#CCC'}
	/>
)

export default TabBarIcon
