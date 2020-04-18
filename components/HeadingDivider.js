import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { View, Text, StyleSheet } from 'react-native'

const HeadingDivider = ({ title }) => (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', overflow: 'hidden', paddingVertical: RFValue(3, 600),
        borderRadius: 8
    },
    titleContainer: {
        flex: 1, justifyContent: 'center', height: RFValue(40, 600),
        paddingHorizontal: RFValue(16, 600), backgroundColor: '#EDEDED',
        shadowColor: '#000', shadowOffset: { width: 1, height: 1, }, shadowOpacity: .2, shadowRadius: RFValue(12, 600), elevation: 8
    },
    title: { color: '#A8A8A8', fontSize: RFValue(17, 600), fontWeight: 'bold' }
})

export default HeadingDivider