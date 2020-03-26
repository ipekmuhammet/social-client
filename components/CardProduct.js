import React from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { RFPercentage } from 'react-native-responsive-fontsize'

import { decreaseProductCount, increaseProductCount } from '../actions/actions1'

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
			<View style={{ flex: 1, width: '100%', paddingHorizontal: 8, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
				<Text style={styles.productName} numberOfLines={2}>{product_name}</Text>
			</View>
			<View style={{ flex: 1, width: '100%', paddingHorizontal: 8, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
				<Text style={styles.productPrice} numberOfLines={2}>{'₺' + price}</Text>
			</View>
			<View style={styles.child} />
		</View>

		<View style={[styles.child, styles.flex2, styles.column]}>
			<View style={styles.child} />
			<View style={styles.rowChild}>

				<TouchableOpacity onPress={() => { decreaseProductCount(id) }} style={[styles.child, styles.decreaseButton]}>
					<Text style={{ color: '#5D3EBD', fontSize: 18 }}>{'-'}</Text>
				</TouchableOpacity>

				<View style={[styles.child, { backgroundColor: '#5D3EBD', padding: 4 }]}>
					<Text style={{ color: 'white', fontSize: 18 }}>{count}</Text>
				</View>

				<TouchableOpacity onPress={() => { increaseProductCount(id) }} style={[styles.child, styles.increaseButton]}>
					<Text style={{ color: '#5D3EBD', fontSize: 18 }}>{'+'}</Text>
				</TouchableOpacity>

			</View>
			<View style={styles.child} />
		</View>

	</View >
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
		fontSize: RFPercentage(3),
		fontWeight: '700',
		color: 'black',
		textAlign: 'justify',
		justifyContent: 'center'
	},
	productPrice: {
		fontSize: RFPercentage(2.7),
		fontWeight: '700',
		color: '#5837C2',
		textAlign: 'center',
		justifyContent: 'center'
	},
	productImage: {
		width: RFPercentage(14),
		height: RFPercentage(14)
	},
	decreaseButton: {
		padding: 4,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10
	},
	increaseButton: {
		padding: 4,
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10
	}
})

const mapDispatchToProps = {
	decreaseProductCount,
	increaseProductCount
}

export default connect(null, mapDispatchToProps)(CardProduct)
