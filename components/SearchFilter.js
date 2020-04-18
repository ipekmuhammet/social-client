import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native'

const SearchFilter = ({ listRef }) => (
    <View>
        <FlatList
            contentContainerStyle={styles.list}
            data={['water', 'milk', 'bread', 'egg', 'yogurt', 'coffee']}
            keyExtractor={(_, index) => 'most_searched' + index}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.mostSearchedItem} onPress={() => {
                    listRef.scrollToOffset(0, 260 * 3)
                }}>
                    <Text style={styles.itemText}>{item}</Text>
                </TouchableOpacity>
            )}
        />
    </View>
)

const styles = StyleSheet.create({
    list: {
        height: 56
    },
    mostSearchedItem: {
        paddingHorizontal: RFValue(12, 600), margin: RFValue(4, 600), backgroundColor: 'white', minWidth: 60,
        alignItems: 'center', justifyContent: 'center', borderWidth: .4, borderColor: '#5D3EBD', borderRadius: 8
    },
    itemText: { color: '#5D3EBD', fontSize: RFValue(14, 600) }
})

export default SearchFilter