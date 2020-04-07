import React from 'react'
import { connect } from 'react-redux'
import { FlatList, ImageBackground, StyleSheet } from 'react-native'
// import { SliderBox } from 'react-native-image-slider-box'

import Category from '../components/Category'
import banner from '../assets/banner.jpg'
import EmptyCategory from '../components/EmptyCategory'


//	const images = [
//		'https://source.unsplash.com/1024x768/?nature',
//		'https://source.unsplash.com/1024x768/?water',
//		'https://source.unsplash.com/1024x768/?girl',
//		'https://source.unsplash.com/1024x768/?tree'
//	]

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
		contentContainerStyle={styles.categoryList}
		data={formatData(Object.values(categories), 3)}
		columnWrapperStyle={{ justifyContent: 'space-between' }}
		keyExtractor={(item) => item.id}
		renderItem={({ item, index }) => item.empty ? <EmptyCategory /> : <Category navigation={navigation} index={index} data={item} />
		}
		numColumns={3}
		ListHeaderComponent={
			<ImageBackground
				style={styles.sliderImage}
				source={banner}
				resizeMode={'cover'}
			/>
			//	Kastırıyor.
			//	<SliderBox
			//	    autoplay
			//	    circleLoop
			//	    resizeMethod={'resize'}
			//	    resizeMode={'cover'}
			//	    sliderBoxHeight={180}
			//	    images={images} />
		}
	/>
)

const styles = StyleSheet.create({
	categoryList: { backgroundColor: '#F5F5F5' },
	sliderImage: { height: 180, left: 0, right: 0 }
})

const mapStateToProps = ({
	reducer4: {
		categories
	}
}) => ({
	categories
})

export default connect(mapStateToProps)(HomeScreen)
