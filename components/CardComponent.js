import React from 'react'
import { connect } from 'react-redux'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { CommonActions } from '@react-navigation/native'

import { setSelectedCard } from '../actions/actions2'

const CardComponent = ({ item, navigation, stackNavigation, setPopupState, setSelectedCard }) => (
    <View style={styles.container}>
        <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }} onPress={() => {
            setSelectedCard(item.id, () => {
                navigation.goBack()
                stackNavigation.popToTop()
            })
        }}>
            <View style={styles.child}>
                <Image style={styles.cardImage} resizeMode={'contain'} source={require('../assets/visa.png')} />
            </View>
            <View style={[styles.child, styles.textContainer]}>
                <View style={styles.child}>
                    <Text style={styles.cardName}>{item.cardLabel}</Text>
                </View>
                <View style={styles.child}>
                    <Text style={styles.cardNumber}>{item.cardNumber}</Text>
                </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.child} onPress={() => {
            setPopupState({ scaleAnimationModal: true, selectedCard: item.id })
        }}>
            <Ionicons name={'md-trash'} size={32} color={'#5D3EBD'} />
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'row', padding: 8, marginHorizontal: 6, borderBottomWidth: .4, borderBottomColor: '#CDCDCD' },
    child: { alignItems: 'center', justifyContent: 'center', marginHorizontal: 8 },
    cardName: { fontSize: RFValue(17, 600), fontWeight: 'bold' },
    cardNumber: { fontSize: RFValue(16, 600), color: '#6C7486' },
    highlightedText: { fontSize: RFValue(17, 600), color: '#5D3EBD' },
    cardImage: { height: 24, width: 36 },
    textContainer: { flex: 1, alignItems: 'flex-start', marginHorizontal: 6 }
})

const mapDispatchToProps = {
    setSelectedCard
}

export default connect(null, mapDispatchToProps)(CardComponent)