import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const SettingItem = ({ children: icon, title }) => (
    <TouchableOpacity style={styles.container}>
        <View style={styles.iconContainer}>
            {icon}
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightIconContainer}>
            <MaterialIcons color={'#4522A0'} name={'chevron-right'} size={32} />
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: { flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#D2D2D2', marginHorizontal: 6 },
    iconContainer: { alignItems: 'center', justifyContent: 'center', flex: 1 },
    titleContainer: { alignItems: 'flex-start', flex: 6, justifyContent: 'center' },
    title: { fontSize: 16, color: '#727B8F' },
    rightIconContainer: { alignItems: 'flex-end', justifyContent: 'center', flex: 1 }
})

export default SettingItem