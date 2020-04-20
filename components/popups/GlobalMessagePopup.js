import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import FlashMessage from 'react-native-flash-message'
import { RFValue } from 'react-native-responsive-fontsize'

import { setMessagePopupRef } from '../../actions/global-actions'

const GlobalMessagePopup = ({ children, setMessagePopupRef }) => (
    <View style={{
        ...StyleSheet.absoluteFillObject,
        zIndex: 1000,
        elevation: 0.01,
        top: 100
    }}>
        <FlashMessage
            ref={setMessagePopupRef}
            position='top'
            MessageComponent={(source) => (
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        {children}
                    </View>
                    <View style={styles.titleContainer}>
                        <Text numberOfLines={3} style={styles.title}>{source.message.message}</Text>
                    </View>
                </View>
            )}
        />
    </View>
)

const styles = StyleSheet.create({
    container: { flex: 1, height: RFValue(80, 600), margin: RFValue(12, 600), borderRadius: 6, backgroundColor: 'white', display: 'flex', flexDirection: 'row' },
    iconContainer: { alignItems: 'center', justifyContent: 'center', marginHorizontal: RFValue(12, 600) },
    titleContainer: { flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginHorizontal: RFValue(12, 600), backgroundColor: 'white' },
    title: { fontSize: RFValue(18, 600) }
})

const mapDispatchToProps = {
    setMessagePopupRef
}

export default connect(null, mapDispatchToProps)(GlobalMessagePopup)