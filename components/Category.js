import React from 'react'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'
import {
	TouchableOpacity, View, Text, Image, StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import { SERVER_URL } from '../utils/global'

import { setSelectedCategory } from '../actions/actions3'

const Category = ({
	// eslint-disable-next-line no-shadow
	data: { imagePath, name }, index, navigation, setSelectedCategory,
}) => {
	const imageUrl = `${SERVER_URL}/assets/categories/${imagePath}.jpg`

	const onCategoryClick = () => {
		setSelectedCategory(index)
		navigation.navigate('products')
	}

	return (
		<TouchableOpacity style={styles.container} onPress={onCategoryClick}>

			<View style={[styles.child, styles.imageContainer]}>
				<Image source={{ uri: imageUrl }} resizeMode="contain" style={styles.productImage} />
			</View>

			<View style={[styles.child, { minHeight: 50 }]}>
				<Text style={styles.categoryName}>{name}</Text>
			</View>

		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		padding: RFPercentage(0.8),
		margin: RFPercentage(0.8),
		zIndex: -1,
	},
	child: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	imageContainer: {
		borderWidth: 0.2,
		borderRadius: 12,
		borderColor: '#5D3EBD',
		backgroundColor: 'white',
		shadowColor: '#000',
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 12,
		elevation: 2,
	},
	productImage: {
		width: RFPercentage(14),
		height: RFPercentage(14),
		margin: RFValue(4, 600),
	},
	categoryName: {
		fontSize: RFPercentage(3),
		marginVertical: 8,
		fontWeight: '300',
		color: '#707070',
		textAlign: 'center',
		justifyContent: 'center',
	},
})

const mapDispatchToProps = {
	setSelectedCategory,
}

export default connect(null, mapDispatchToProps)(Category)
