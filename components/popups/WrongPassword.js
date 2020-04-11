import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FlashMessage from 'react-native-flash-message'
import { Ionicons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

const WrongPassword = () => (
    <FlashMessage
        renderCustomContent={true}
        position='top'
        MessageComponent={() => (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Ionicons name={'md-warning'} size={48} color={'red'} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Wrong GSM or password.</Text>
                </View>
            </View>
        )}
    />
)

const styles = StyleSheet.create({
    container: { flex: 1, height: RFValue(80, 600), margin: RFValue(12, 600), borderRadius: 12, backgroundColor: 'white', display: 'flex', flexDirection: 'row' },
    iconContainer: { alignItems: 'center', justifyContent: 'center', marginHorizontal: RFValue(12, 600) },
    titleContainer: { alignItems: 'center', justifyContent: 'center', marginHorizontal: RFValue(12, 600) },
    title: { fontSize: RFValue(20, 600) }
})

export default WrongPassword