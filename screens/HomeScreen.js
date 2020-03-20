import React from 'react'
import { FlatList, ImageBackground } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'

import { getCategories } from '../data/api'
import Category from '../components/Category'
import banner from '../assets/banner.jpg'


const images = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree"
]

const HomeScreen = ({ navigation }) => (
    <FlatList
        contentContainerStyle={{ backgroundColor: 'white' }}
        data={Object.values(getCategories())}
        keyExtractor={(item) => item.Id}
        renderItem={({ item, index }) => <Category navigation={navigation} index={index} data={item} />}
        numColumns={3}
        ListHeaderComponent={
            <ImageBackground
                style={{ height: 180, left: 0, right: 0 }}
                source={banner}
                resizeMode={'cover'}
            />
            // Kastırıyor.
            //<SliderBox
            //    autoplay
            //    circleLoop
            //    resizeMethod={'resize'}
            //    resizeMode={'cover'}
            //    sliderBoxHeight={180}
            //    images={images} />
        }
    />
)

export default HomeScreen
