import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { connect } from 'react-redux'
import { FlatList, ImageBackground, StyleSheet } from 'react-native'

import Category from '../components/Category'
import banner from '../assets/banner.jpg'
import EmptyCategory from '../components/EmptyCategory'


const formatData = (data, numColumns) => {
	const numberOfFullRows = Math.floor(data.length / numColumns)

	let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns)
	while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
		data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true })
		numberOfElementsLastRow++
	}

	return data
}


const HomeScreen = ({ categories, navigation }) => (
	<FlatList
		data={formatData(Object.values(categories), 3)}
		columnWrapperStyle={{ justifyContent: 'space-between' }}
		keyExtractor={(item) => item._id}
		renderItem={({ item, index }) => item.empty ? <EmptyCategory /> : <Category navigation={navigation} index={index} data={item} />
		}
		numColumns={3}
		ListHeaderComponent={
			<ImageBackground
				style={styles.sliderImage}
				source={banner}
				resizeMode={'cover'}
			/>
		}
	/>
)

const styles = StyleSheet.create({
	sliderImage: { height: RFValue(180, 600), left: 0, right: 0 }
})

const mapStateToProps = ({
	reducer4: {
		categories
	}
}) => ({
	categories
})

export default connect(mapStateToProps)(HomeScreen)
