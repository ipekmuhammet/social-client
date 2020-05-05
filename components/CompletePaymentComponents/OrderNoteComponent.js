import React from 'react'
import {
	View, TouchableOpacity, Text, StyleSheet,
} from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

const OrderNoteComponent = () => (
	<View style={styles.container}>
		<View style={styles.rowContainer}>
			<View style={styles.iconContainer}>
				<Ionicons size={32} name="md-attach" />
			</View>
			<View style={styles.infoContainer}>
				<TouchableOpacity
					style={styles.infoTextContainer}
					onPress={() => {
						console.log('address')
					}}
				>
					<Text style={styles.title}>Siparişinizle ilgili tüm detayları (soğuk kola vb...) belirtebilir, sonra kullanmak üzere kaydedebilirsiniz.</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.showSavedNotesContainer}
					onPress={() => {
						console.log('show saved notes')
					}}
				>
					<View style={styles.showSavedNotesTextContainer}>
						<Text style={styles.showSavedNotesText}>Kayıtlı notlarımı göster</Text>
					</View>
					<MaterialIcons color="#ACACAC" size={32} name="chevron-right" />
				</TouchableOpacity>
			</View>
		</View>
	</View>
)

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
	},
	rowContainer: {
		flexDirection: 'row',
	},
	iconContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: RFValue(8, 600),
		padding: RFValue(4, 600),
		flex: 1,
	},
	infoContainer: {
		flexDirection: 'column',
		marginHorizontal: RFValue(8, 600),
		padding: RFValue(4, 600),
		flex: 5,
	},
	infoTextContainer: {
		flex: 1,
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#D8D8D8',
	},
	title: {
		fontSize: RFValue(17, 600),
		marginVertical: RFValue(4, 600),
		color: '#9C9C9C',
	},
	showSavedNotesContainer: {
		flexDirection: 'row',
		padding: 4,
	},
	showSavedNotesText: {
		fontSize: RFValue(16, 600),
		fontWeight: 'bold',
		marginVertical: 4,
	},
	showSavedNotesTextContainer: {
		flex: 5,
	},
})

export default OrderNoteComponent
