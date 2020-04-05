import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

import CardProductQuantityComponent from './CardProductQuantityComponent'

const CardProduct = ({ data: { id, product_name, price, image, count }, decreaseProductCount, increaseProductCount }) => (
	<View style={styles.container}>

		<View style={[styles.child, styles.flex2, {
			padding: 4,
			borderWidth: .4,
			borderColor: '#CDCDCD',
			borderRadius: 12,
			backgroundColor: 'white'
		}]}>
			<Image style={styles.productImage}
				resizeMode={'contain'}
				source={{ uri: `http://192.168.1.102:3000/assets/products/${image}.png` }} />
		</View>

		<View style={[styles.child, styles.flex3, styles.column]}>
			<View style={styles.child} />
			<View style={{ width: '100%', paddingHorizontal: 8, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
				<Text style={styles.productName} numberOfLines={2}>{product_name}</Text>
			</View>
			<View style={{ width: '100%', paddingHorizontal: 8, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
				<Text style={styles.productPrice} numberOfLines={2}>{'₺' + price.toFixed(2).toString().replace('.', ',')}</Text>
			</View>
			<View style={styles.child} />
		</View>

		<View style={[styles.child, styles.flex2, styles.column]}>
			<View style={styles.child} />
			<View style={styles.rowChild}>
				<CardProductQuantityComponent id={id} />
			</View>
			<View style={styles.child} />
		</View>

	</View>
)

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		padding: 8,
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: '#EFEFEF'
	},
	child: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	flex2: {
		flex: 1.6
	},
	flex3: {
		flex: 3
	},
	column: {
		flexDirection: 'column',
		display: 'flex'
	},
	rowChild: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		display: 'flex'
	},
	productName: {
		fontSize: RFPercentage(2.7),
		fontWeight: '700',
		color: '#303030',
		textAlign: 'justify',
		justifyContent: 'center',
		letterSpacing: .2
	},
	productPrice: {
		fontSize: RFPercentage(3.4),
		fontWeight: '700',
		color: '#5439B3',
		textAlign: 'center',
		justifyContent: 'center',
		letterSpacing: .2
	},
	productImage: {
		width: RFPercentage(14),
		height: RFPercentage(14)
	}
})

export default CardProduct
