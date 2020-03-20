import React from 'react'
import { View, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

const EmptyCategory = () => (
    <View style={styles.container} />
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: RFPercentage(.8),
        margin: RFPercentage(.8),
        zIndex: -1,
        backgroundColor: 'transparent'
    }
})

export default EmptyCategory