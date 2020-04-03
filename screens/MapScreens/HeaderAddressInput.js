import React from 'react'
import { connect } from 'react-redux'
import { View, TextInput, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const HeaderAddressInput = ({ address }) => (
    <View style={styles.container}>
        <Ionicons name={'md-pin'} size={32} color={'#5D3EBD'} />
        <TextInput style={styles.input} value={address} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        position: 'absolute', top: 0, height: 56, left: 0, right: 0, backgroundColor: 'white', zIndex: 2, display: 'flex',
        flexDirection: 'row', alignItems: 'center', borderRadius: 16, margin: 18, paddingHorizontal: 12
    },
    input: { margin: 8, marginHorizontal: 4, flex: 1, fontSize: 20, padding: 8, paddingHorizontal: 8, color: '#757B8B' }
})

const mapStateToProps = ({
    mapReducer: {
        address
    }
}) => ({
    address
})

export default connect(mapStateToProps)(HeaderAddressInput)