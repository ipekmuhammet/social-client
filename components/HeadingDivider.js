import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HeadingDivider = ({ title }) => (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: { flexDirection: 'row', overflow: 'hidden', paddingVertical: 2 },
    titleContainer: {
        flex: 1, justifyContent: 'center', height: 48, paddingHorizontal: 24, backgroundColor: '#EDEDED',
        shadowColor: "#000", shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.32, shadowRadius: 6, elevation: 9
    },
    title: { color: '#A8A8A8', fontSize: 20, fontWeight: 'bold' }
})

export default HeadingDivider