import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { connect } from 'react-redux'

import { setSelectedCategory } from '../actions/actions3'
import { getCategoryImage } from '../data/api'

const Category = ({ data: { Id, name }, index, navigation, setSelectedCategory }) => {

    const onCategoryClick = () => {
        setSelectedCategory(index)
        navigation.navigate({ name: 'products' })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onCategoryClick}>

            <View style={[styles.child, styles.imageContainer]}>
                <Image source={getCategoryImage(Id)} resizeMode={'contain'} style={styles.productImage} />
            </View>

            <View style={styles.child}>
                <Text style={styles.productName}>{name}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: RFPercentage(.8),
        margin: RFPercentage(.8),
        zIndex: -1
    },
    child: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    imageContainer: {
        borderWidth: .2,
        borderRadius: 12,
        borderColor: '#BCBCBC',
        backgroundColor: 'white'
    },
    productImage: {
        width: RFPercentage(14),
        height: RFPercentage(14),
        margin: 4
    },
    productName: {
        fontSize: RFPercentage(3),
        fontWeight: '300',
        color: '#707070',
        textAlign: 'center',
        justifyContent: 'center'
    },
    productPrice: {
        fontSize: RFPercentage(3),
        fontWeight: '300',
        color: '#7070D5',
        textAlign: 'center',
        justifyContent: 'center'
    }
})

const mapDispatchToProps = {
    setSelectedCategory
}

export default connect(null, mapDispatchToProps)(Category)