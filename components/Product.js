import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { connect } from 'react-redux'
import { SERVER_URL } from 'react-native-dotenv'

import { addProduct } from '../actions/actions1'

class Product extends React.PureComponent {

	onAddProductClick = () => {
		const { data: { id }, addProduct } = this.props
		addProduct(id)
	}

	render() {
		const { data: { product_name, kind_name, price, image } } = this.props

		return (
			<View style={styles.container}>

				<TouchableOpacity onPress={this.onAddProductClick}
					style={styles.addProductButton}>
					<Text style={styles.addProductIcon}>+</Text>
				</TouchableOpacity>

				<View style={[styles.child, styles.productImageContainer]}>
					<Image source={{ uri: `${SERVER_URL}/assets/products/${image}.png` }} resizeMode={'contain'} style={styles.productImage} />
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
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		padding: RFPercentage(1),
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
		fontSize: RFValue(23, 600)
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
		fontSize: RFPercentage(2.5),
		fontWeight: '300',
		color: '#303030',
		textAlign: 'left',
		justifyContent: 'center',
		letterSpacing: .2
	},
	kindText: {
		fontSize: RFPercentage(2.3),
		fontWeight: '700',
		color: '#B1B1B1',
		textAlign: 'left',
		justifyContent: 'center',
		letterSpacing: .2
	},
	productPrice: {
		fontSize: RFPercentage(2.9),
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