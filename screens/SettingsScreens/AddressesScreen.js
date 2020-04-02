import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import InteractiveSettingItem from '../../components/InteractiveSettingItem'
import HeadingDivider from '../../components/HeadingDivider'
import AddressList from '../../components/AddressList'

const AddressesScreen = ({ navigation }) => (
    <View style={styles.container}>
        <AddressList footer={() => (
            <React.Fragment>
                <HeadingDivider title={'Add Address'} />

                <InteractiveSettingItem title={'Add home address'} onRightIconClick={() => {
                    navigation.navigate('searchAddressScreen')
                }}>
                    <Ionicons color={'#4522A0'} name={'md-home'} size={32} />
                    <Ionicons color={'#4522A0'} name={'md-add'} size={32} />
                </InteractiveSettingItem>

                <InteractiveSettingItem title={'Add work address'} onRightIconClick={() => { console.log('Add work address') }}>
                    <Ionicons color={'#4522A0'} name={'md-business'} size={32} />
                    <Ionicons color={'#4522A0'} name={'md-add'} size={32} />
                </InteractiveSettingItem>

                <InteractiveSettingItem title={'Add other address'} onRightIconClick={() => { console.log('Add other address') }}>
                    <Ionicons color={'#4522A0'} name={'md-locate'} size={32} />
                    <Ionicons color={'#4522A0'} name={'md-add'} size={32} />
                </InteractiveSettingItem>
            </React.Fragment>
        )} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EDEDED'
    }
})


export default AddressesScreen
