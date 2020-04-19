import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { SERVER_URL } from 'react-native-dotenv'

import CardProductQuantityComponent from './CardProductQuantityComponent'

class CardProduct extends React.PureComponent {
	render() {
		const { data: { id, product_name, price, image } } = this.props

		return (
			<View style={styles.container}>

				<View style={[styles.child, styles.flex2, styles.imageContainer]}>
					<Image style={styles.productImage}
						resizeMode={'contain'}
						source={{ uri: `${SERVER_URL}/assets/products/${image}.png` }} />
				</View>

				<View style={[styles.child, styles.flex3, styles.column]}>
					<View style={styles.child} />
					<View style={styles.textContainer}>
						<Text style={styles.productName} numberOfLines={2}>{product_name}</Text>
					</View>
					<View style={styles.textContainer}>
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
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex', flexDirection: 'row', padding: RFValue(8, 600),
		paddingVertical: RFValue(12, 600), borderBottomWidth: 1, borderBottomColor: '#EFEFEF'
	},
	child: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	flex2: { flex: 1.6 },
	flex3: { flex: 3 },
	column: { flexDirection: 'column', display: 'flex' },
	rowChild: { flex: 2, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', display: 'flex' },
	textContainer: { width: '100%', paddingHorizontal: RFValue(8, 600), justifyContent: 'flex-start', alignItems: 'flex-start' },
	productName: { fontSize: RFPercentage(2.4), fontWeight: '700', color: '#303030', textAlign: 'justify', justifyContent: 'center', letterSpacing: .2 },
	productPrice: { fontSize: RFPercentage(3.1), fontWeight: '700', color: '#5439B3', textAlign: 'center', justifyContent: 'center', letterSpacing: .2 },
	imageContainer: {
		padding: RFValue(4, 600), borderWidth: .4, borderColor: '#CDCDCD',
		borderRadius: 12, backgroundColor: 'white'
	},
	productImage: { width: RFPercentage(14), height: RFPercentage(14) }
})

export default CardProduct
