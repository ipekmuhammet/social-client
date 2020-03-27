import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { connect } from 'react-redux'

import { addProduct } from '../actions/actions1'

const Product = ({ data: { id, product_name, kind_name, price, image }, addProduct }) => {

	const imageUrl = `http://192.168.1.102:3000/assets/products/${image}.png`

	const onClick = () => {
		addProduct(id)
	}

	return (
		<View style={styles.container}>

			<TouchableOpacity onPress={onClick} style={styles.addProductButton}>
				<Text style={styles.addProductIcon}>+</Text>
			</TouchableOpacity>

			<View style={[styles.child, styles.productImageContainer]}>
				<Image source={{ uri: imageUrl }} resizeMode={'contain'} style={styles.productImage} />
			</View>

			<View style={[styles.child, { alignItems: 'flex-start' }]}>
				<Text style={styles.productPrice}>{'₺' + price.toString().replace('.', ',')}</Text>
			</View>

			<View style={styles.child}>
				<Text numberOfLines={3} style={styles.productName}>{product_name}</Text>
			</View>

			<View style={[styles.child, { alignItems: 'flex-start' }]}>
				<Text numberOfLines={3} style={styles.kindText}>{kind_name}</Text>
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
		marginVertical: RFPercentage(2),
		zIndex: -1,
		backgroundColor: 'transparent'
	},
	child: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: RFPercentage(.3)
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
		fontSize: RFPercentage(2.8),
		fontWeight: '300',
		color: '#303030',
		textAlign: 'left',
		justifyContent: 'center',
		letterSpacing: .2
	},
	kindText: {
		fontSize: RFPercentage(2.6),
		fontWeight: '700',
		color: '#B1B1B1',
		textAlign: 'left',
		justifyContent: 'center',
		letterSpacing: .2
	},
	productPrice: {
		fontSize: RFPercentage(3.2),
		fontWeight: '700',
		color: '#5837C2',
		textAlign: 'left',
		justifyContent: 'center',
		letterSpacing: .2
	}
})

const mapDispatchToProps = {
	addProduct
}

export default connect(null, mapDispatchToProps)(Product)