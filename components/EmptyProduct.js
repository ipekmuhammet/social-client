import React from 'react'
import { View, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

const EmptyProduct = () => <View style={styles.container} />

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: RFPercentage(1),
        margin: RFPercentage(1),
        zIndex: -1,
        backgroundColor: 'transparent'
    }
})

export default EmptyProduct