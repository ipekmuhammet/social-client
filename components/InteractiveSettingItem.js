import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const InteractiveSettingItem = ({ children: icons, title, onRightIconClick }) => (
    <View style={styles.container}>
        <View style={styles.iconContainer}>
            {icons[0]}
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
        <TouchableOpacity style={styles.rightIconContainer} onPress={onRightIconClick}>
            {icons[1]}
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    container: { flexDirection: 'row', padding: 10, borderBottomWidth: .8, borderBottomColor: '#D2D2D2', marginHorizontal: 6 },
    iconContainer: { alignItems: 'center', justifyContent: 'center', flex: 1 },
    titleContainer: { alignItems: 'flex-start', flex: 6, justifyContent: 'center' },
    title: { marginHorizontal: 4, fontSize: 16, fontWeight: 'bold', color: 'black' },
    rightIconContainer: { alignItems: 'flex-end', justifyContent: 'center', flex: 1 }
})

export default InteractiveSettingItem