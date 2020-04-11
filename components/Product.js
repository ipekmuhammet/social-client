import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { connect } from 'react-redux'

import { addProduct } from '../actions/actions1'

const Product = ({ data: { id, product_name, kind_name, price, image }, addProduct }) => (
	<View style={styles.container}>

		<TouchableOpacity onPress={() => {
			addProduct(id, token)
		}}
			style={styles.addProductButton}>
			<Text style={styles.addProductIcon}>+</Text>
		</TouchableOpacity>

		<View style={[styles.child, styles.productImageContainer]}>
			<Image source={{ uri: `http://192.168.1.102:3000/assets/products/${image}.png` }} resizeMode={'contain'} style={styles.productImage} />
		</View>

		<Text style={[styles.child, styles.productPrice, { alignItems: 'flex-start' }]}>{'₺' + price.toFixed(2).toString().replace('.', ',')}</Text>

		<Text numberOfLines={3} style={[styles.productName, styles.child]}>{product_name}</Text>

		{
			//	<View style={[styles.child, { alignItems: 'flex-start' }]}>
			//		<Text numberOfLines={3} style={styles.kindText}>{kind_name}</Text>
			//	</View>
		}

	</View>
)

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		padding: RFPercentage(1),
		margin: RFPercentage(1),
		marginVertical: RFPercentage(2),
		zIndex: -1,
		backgroundColor: 'transparent'
	},
	child: {
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
		width: RFValue(28, 600),
		height: RFValue(28, 600),
		borderColor: '#CDCDCD',
		backgroundColor: 'white',
		shadowColor: '#000', shadowOffset: { width: 1, height: 1, }, shadowOpacity: .2, shadowRadius: 12, elevation: 4
	},
	addProductIcon: {
		color: '#5837C2',
		fontSize: RFValue(24, 600)
	},
	productImageContainer: {
		borderWidth: .2,
		borderColor: '#BCBCBC',
		borderRadius: 8,
		backgroundColor: 'white'
	},
	productImage: {
		width: RFPercentage(14),
		height: RFPercentage(14),
		margin: RFValue(12, 600)
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

const mapStateToProps = ({
	reducer4: {
		token
	}
}) => ({
	token
})

const mapDispatchToProps = {
	addProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)