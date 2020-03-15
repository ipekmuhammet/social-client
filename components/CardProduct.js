import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import productExample from '../assets/product-example.png'

class CardProduct extends Component {
    render() {
        console.log(this.props.data)
        return (
            <View style={styles.container}>
                <View style={styles.child}>
                    <Image style={styles.productImage} source={productExample} />
                </View>
                <View style={[styles.child, styles.column]}>
                    <View style={styles.child}>
                        <Text> prop </Text>
                    </View>
                    <View style={styles.child}>
                        <Text> prop </Text>
                    </View>
                </View>
                <View style={styles.child}>
                    <Text> prop </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#CDCDCD',
        margin: 5
    },
    child: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    column: {
        flexDirection: 'column',
        display: 'flex'
    },
    productImage: {
        width: 64,
        height: 64
    }
})

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CardProduct)
