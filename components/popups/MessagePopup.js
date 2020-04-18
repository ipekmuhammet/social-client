import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FlashMessage from 'react-native-flash-message'
import { RFValue } from 'react-native-responsive-fontsize'

const MessagePopup = ({ children, text, onRef }) => (
    <FlashMessage
        ref={onRef}
        position='top'
        MessageComponent={() => (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    {children}
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{text}</Text>
                </View>
            </View>
        )}
    />
)

const styles = StyleSheet.create({
    container: { flex: 1, height: RFValue(80, 600), margin: RFValue(12, 600), borderRadius: 12, backgroundColor: 'white', display: 'flex', flexDirection: 'row' },
    iconContainer: { alignItems: 'center', justifyContent: 'center', marginHorizontal: RFValue(12, 600) },
    titleContainer: { alignItems: 'center', justifyContent: 'center', marginHorizontal: RFValue(12, 600) },
    title: { fontSize: RFValue(18, 600) }
})

export default MessagePopup