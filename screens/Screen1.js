import React, { Component } from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'
import { connect } from 'react-redux'

import { SliderBox } from 'react-native-image-slider-box'
import { getCategories } from '../data/api'

import Category from '../components/Category'

const images = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree"
]

class Screen1 extends Component {
    render() {
        return (
            <ScrollView>
                <SliderBox
                    autoplay
                    circleLoop
                    resizeMethod={'resize'}
                    resizeMode={'cover'}
                    sliderBoxHeight={140}
                    images={images} />

                <FlatList
                    data={Object.values(getCategories())}
                    keyExtractor={(item) => item.Id}
                    renderItem={({ item }) => <Category data={item} />}
                    numColumns={3}
                />
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Screen1)
