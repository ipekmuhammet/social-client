import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import InteractiveSettingItem from '../../components/InteractiveSettingItem'
import HeadingDivider from '../../components/HeadingDivider'

const AddressesScreen = () => (
    <ScrollView style={styles.container}>

        <InteractiveSettingItem title={'Home - Fatih (Ayvansaray Mah.)'}>
            <Ionicons color={'#4522A0'} name={'md-home'} size={40} />
            <Ionicons color={'#4522A0'} name={'md-trash'} size={40} />
        </InteractiveSettingItem>

        <HeadingDivider title={'Add Address'} />

        <InteractiveSettingItem title={'Add home address'}>
            <Ionicons color={'#4522A0'} name={'md-home'} size={40} />
            <Ionicons color={'#4522A0'} name={'md-add'} size={40} />
        </InteractiveSettingItem>

        <InteractiveSettingItem title={'Add work address'}>
            <Ionicons color={'#4522A0'} name={'md-business'} size={40} />
            <Ionicons color={'#4522A0'} name={'md-add'} size={40} />
        </InteractiveSettingItem>

        <InteractiveSettingItem title={'Add other address'}>
            <Ionicons color={'#4522A0'} name={'md-locate'} size={40} />
            <Ionicons color={'#4522A0'} name={'md-add'} size={40} />
        </InteractiveSettingItem>

    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EDEDED'
    }
})

export default AddressesScreen
