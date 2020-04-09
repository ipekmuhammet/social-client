import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { View, TouchableOpacity, FlatList, Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import HeadingDivider from '../components/HeadingDivider'

const SearchScreen = () => (
    <View style={styles.container} behavior={'height'}>
        <View style={styles.searchHeader}>
            <View style={styles.iconContainer}>
                <Ionicons name={'md-search'} size={32} color={'#5D3EBD'} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.searchInput} placeholder={'Search Product'} />
            </View>
            <View style={styles.iconContainer}>
                <Ionicons name={'md-microphone'} size={32} color={'#6D7891'} />
            </View>
        </View>
        <HeadingDivider title={'Popular Searches'} />
        <View style={styles.mostSearchContainer}>
            <FlatList
                data={['water', 'milk', 'bread', 'egg', 'yogurt', 'coffee']}
                keyExtractor={(_, index) => 'most_searched' + index}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.mostSearchedItem}>
                        <Text style={styles.itemText}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
        <View style={styles.emptyFooter} />
    </View>
)

const styles = StyleSheet.create({
    container: { top: 0, left: 0, height: 600, width: Dimensions.get('window').width, flexDirection: 'column' },
    searchHeader: { flex: .8, margin: RFValue(2, 600), flexDirection: 'row', backgroundColor: 'white' },
    mostSearchContainer: { flex: .7, padding: RFValue(2, 600), margin: RFValue(2, 600), alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' },
    iconContainer: { alignItems: 'center', justifyContent: 'center', flex: 1 },
    inputContainer: { alignItems: 'center', justifyContent: 'center', flex: 6, display: 'flex', flexDirection: 'row' },
    searchInput: { textAlign: 'left', flex: 1, fontSize: 21 },
    mostSearchedItem: { flex: 1, paddingHorizontal: RFValue(12, 600), margin: RFValue(4, 600), backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderWidth: .4, borderColor: '#5D3EBD', borderRadius: RFValue(8, 600) },
    itemText: { color: '#5D3EBD', fontSize: RFValue(14, 600) },
    emptyFooter: { flex: 7, margin: RFValue(2, 600) }
})

export default SearchScreen