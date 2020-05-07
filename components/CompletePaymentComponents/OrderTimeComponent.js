import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import {
	View, TouchableOpacity, Text, StyleSheet,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const OrderTimeComponent = () => (
	<TouchableOpacity
		style={styles.container}
		onPress={() => {
			console.log('address')
		}}
	>
		<View style={styles.iconContainer}>
			<Ionicons size={32} name="md-time" />
		</View>
		<View style={styles.paymentInfoContainer}>
			<View style={styles.paymentInfoTextContainer}>
				<Text style={styles.paymentTitle}>Bugün (17.03.2020)</Text>
			</View>
			<View style={styles.paymentInfoTextContainer}>
				<Text style={styles.paymentDetail}>Hemen ~ 25-35 dakika</Text>
			</View>
		</View>
		<View style={styles.iconContainer}>
			<MaterialIcons color="#ACACAC" size={32} name="chevron-right" />
		</View>
	</TouchableOpacity>
)

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	iconContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: RFValue(8, 600),
		padding: RFValue(4, 600),
		flex: 1,
	},
	paymentInfoContainer: {
		flexDirection: 'column',
		marginHorizontal: RFValue(8, 600),
		padding: RFValue(4, 600),
		height: RFValue(60, 600),
		flex: 5,
	},
	paymentInfoTextContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	paymentTitle: {
		fontSize: RFValue(17, 600),
		marginVertical: RFValue(4, 600),
	},
	paymentDetail: {
		fontSize: RFValue(14, 600),
		marginVertical: RFValue(4, 600),
	},
})

export default OrderTimeComponent
