import React from 'react'
import { View, TouchableOpacity, FlatList, Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import HeadingDivider from '../components/HeadingDivider'

const SearchScreen = () => (
    <View style={styles.container} behavior={'height'}>
        <View style={{ flex: .8, margin: 2, flexDirection: 'row', backgroundColor: 'white' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Ionicons name={'md-search'} size={32} color={'#5D3EBD'} />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 6, display: 'flex', flexDirection: 'row' }}>
                <TextInput style={{ textAlign: 'left', flex: 1, fontSize: 21 }} placeholder={'Search Product'} />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Ionicons name={'md-microphone'} size={32} color={'#6D7891'} />
            </View>
        </View>
        <HeadingDivider title={'Popular Searches'} />
        <View style={{ flex: .8, padding: 6, margin: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <FlatList
                data={['water', 'milk', 'bread', 'egg', 'yogurt', 'coffee']}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) =>
                    <TouchableOpacity style={{ flex: 1, paddingHorizontal: 12, margin: 4, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderWidth: .4, borderColor: '#5D3EBD', borderRadius: 8 }}>
                        <Text style={{ color: '#5D3EBD', fontSize: 14 }}>{item}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
        <View style={{ flex: 7, margin: 2 }}></View>
    </View>
)

const styles = StyleSheet.create({
    container: { top: 0, left: 0, height: Dimensions.get('window').height, width: Dimensions.get('window').width, flexDirection: 'column' }
})

export default SearchScreen