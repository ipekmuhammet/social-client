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
    container: { flexDirection: 'row', overflow: 'hidden', paddingVertical: 4, borderRadius: 8 },
    titleContainer: {
        flex: 1, justifyContent: 'center', height: 44, paddingHorizontal: 20, backgroundColor: '#EDEDED',
        shadowColor: "#000", shadowOffset: { width: 1, height: 1, }, shadowOpacity: .2, shadowRadius: 12, elevation: 6
    },
    title: { color: '#A8A8A8', fontSize: 19, fontWeight: 'bold' }
})

export default HeadingDivider