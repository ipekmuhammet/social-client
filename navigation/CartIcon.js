import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RFValue } from 'react-native-responsive-fontsize'

const CartIcon = ({ name, focused, cart }) => (
	<View>
		<Ionicons
			name={name}
			size={28}
			style={{ marginBottom: -3 }}
			color={focused ? '#5D3EBD' : '#CCC'}
		/>
		{
			Object.values(cart).length > 0 && (
				<View style={styles.badge}>
					<Text style={styles.badgeText}>{Object.values(cart).length}</Text>
				</View>
			)
		}
	</View>
)

const styles = StyleSheet.create({
	badge: {
		position: 'absolute', right: -10, top: 0, backgroundColor: 'red', borderRadius: 8, width: 16, height: 16, justifyContent: 'center', alignItems: 'center'
	},
	badgeText: { color: 'white', fontSize: RFValue(12, 600) }
})

const mapStateToProps = ({
	reducer1: {
		cart
	}
}) => ({
	cart
})

export default connect(mapStateToProps)(CartIcon)
