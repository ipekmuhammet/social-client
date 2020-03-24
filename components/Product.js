import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { connect } from 'react-redux'

import { addProduct } from '../actions/actions1'

const Product = ({ data: { Id, categoryId, name, price }, addProduct }) => {

	const imageUrl = `http://192.168.1.102:3000/assets/products/${categoryId}/${parseInt(Id) % 10 ? parseInt(Id) % 10 : 10}.jpg`

	const onClick = () => {
		addProduct(Id)
	}

	return (
		<View style={styles.container}>

			<TouchableOpacity onPress={onClick} style={styles.addProductButton}>
				<Text style={styles.addProductIcon}>+</Text>
			</TouchableOpacity>

			<View style={[styles.child, styles.productImageContainer]}>
				<Image source={{ uri: imageUrl }} resizeMode={'contain'} style={styles.productImage} />
			</View>

			<View style={styles.child}>
				<Text numberOfLines={2} style={styles.productName}>{name}</Text>
			</View>

			<View style={styles.child}>
				<Text style={styles.productPrice}>{'₺' + price}</Text>
			</View>

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		padding: RFPercentage(1),
		margin: RFPercentage(1),
		zIndex: -1,
		backgroundColor: 'transparent'
	},
	child: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	addProductButton: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		top: -2,
		right: -2,
		zIndex: 1,
		borderRadius: 8,
		borderWidth: .6,
		width: 28,
		height: 28,
		borderColor: '#CDCDCD',
		backgroundColor: 'white',
		shadowColor: "#000", shadowOffset: { width: 1, height: 1, }, shadowOpacity: .2, shadowRadius: 12, elevation: 4
	},
	addProductIcon: {
		color: '#5837C2',
		fontSize: 24
	},
	productImageContainer: {
		borderWidth: .2,
		borderColor: '#BCBCBC',
		borderRadius: RFPercentage(2),
		backgroundColor: 'white'
	},
	productImage: {
		width: RFPercentage(14),
		height: RFPercentage(14),
		margin: 12
	},
	productName: {
		fontSize: RFPercentage(2.7),
		fontWeight: '300',
		color: '#707070',
		textAlign: 'center',
		justifyContent: 'center'
	},
	productPrice: {
		fontSize: RFPercentage(2.7),
		fontWeight: '300',
		color: '#5837C2',
		textAlign: 'center',
		justifyContent: 'center'
	}
})

const mapDispatchToProps = {
	addProduct
}

export default connect(null, mapDispatchToProps)(Product)