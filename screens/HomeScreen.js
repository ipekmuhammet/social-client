import React from 'react'
import { FlatList } from 'react-native'

import { SliderBox } from 'react-native-image-slider-box'
import { getCategories } from '../data/api'

import Category from '../components/Category'

const images = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree"
]

const HomeScreen = ({ navigation }) => (
    <FlatList
        data={Object.values(getCategories())}
        keyExtractor={(item) => item.Id}
        renderItem={({ item }) => <Category navigation={navigation} data={item} />}
        numColumns={3}
    //ListHeaderComponent={
    //    <SliderBox
    //        autoplay
    //        circleLoop
    //        resizeMethod={'resize'}
    //        resizeMode={'cover'}
    //        sliderBoxHeight={140}
    //        images={images} />
    //}
    />
)

export default HomeScreen
