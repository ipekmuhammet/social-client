import React from 'react'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'
import { TouchableOpacity, View, Text, Image, StyleSheet  } from 'react-native'
import { connect } from 'react-redux'

import { setSelectedCategory } from '../actions/actions3'

const Category = ({ data: { id, name }, index, navigation, setSelectedCategory }) => {

	const imageUrl = `http://192.168.1.102:3000/assets/categories/${id}.jpg`

	const onCategoryClick = () => {
		setSelectedCategory(index)
		navigation.navigate('products')
	}

	return (
		<TouchableOpacity style={styles.container} onPress={onCategoryClick}>

			<View style={[styles.child, styles.imageContainer]}>
				<Image source={{ uri: imageUrl }} resizeMode={'contain'} style={styles.productImage} />
			</View>

			<View style={styles.child}>
				<Text style={styles.productName}>{name}</Text>
			</View>

		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		padding: RFPercentage(.8),
		margin: RFPercentage(.8),
		zIndex: -1
	},
	child: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	imageContainer: {
		borderWidth: .2,
		borderRadius: RFValue(12, 600),
		borderColor: '#5D3EBD',
		backgroundColor: 'white',
		shadowColor: '#000', shadowOffset: { width: 1, height: 1, }, shadowOpacity: .2, shadowRadius: RFValue(12, 600), elevation: 2
	},
	productImage: {
		width: RFPercentage(14),
		height: RFPercentage(14),
		margin: RFValue(4, 600)
	},
	productName: {
		fontSize: RFPercentage(3),
		fontWeight: '300',
		color: '#707070',
		textAlign: 'center',
		justifyContent: 'center'
	},
	productPrice: {
		fontSize: RFPercentage(3),
		fontWeight: '300',
		color: '#7070D5',
		textAlign: 'center',
		justifyContent: 'center'
	}
})

const mapDispatchToProps = {
	setSelectedCategory
}

export default connect(null, mapDispatchToProps)(Category)