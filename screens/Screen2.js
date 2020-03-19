import React from 'react'
import { View, TouchableOpacity, FlatList, Text, TextInput, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import HeadingDivider from '../components/HeadingDivider'

const Screen2 = () => (
    <View style={styles.container}>
        <View style={{ flex: 1, margin: 2, flexDirection: 'row' }}>
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
        <View style={{ flex: 1.2, margin: 2 }}>
            <HeadingDivider title={'Popular Searches'} />
        </View>
        <View style={{ flex: 1.2, margin: 2, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                data={['water', 'milk', 'bread', 'egg', 'yogurt', 'coffee']}
                horizontal={true}
                scroll
                renderItem={({ item }) =>
                    <TouchableOpacity style={{ flex: 1, paddingHorizontal: 12, margin: 4, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#5D3EBD', borderRadius: 8 }}>
                        <Text style={{ color: '#5D3EBD', fontSize: 16 }}>{item}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
        <View style={{ flex: 7, margin: 2 }}></View>
    </View>
)

const styles = StyleSheet.create({
    container: { ...StyleSheet.absoluteFillObject, flexDirection: 'column' }
})

export default Screen2