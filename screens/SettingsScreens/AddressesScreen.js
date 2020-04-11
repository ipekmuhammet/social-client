import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import ClickableSettingItem from '../../components/ClickableSettingItem'
import HeadingDivider from '../../components/HeadingDivider'
import AddressList from '../../components/AddressList'

const AddressesScreen = ({ navigation, route }) => (
    <View style={styles.container}>
        <AddressList navigation={route.params.navigation} footer={() => (
            <React.Fragment>
                <HeadingDivider title={'Add Address'} />

                <ClickableSettingItem title={'Add address'} onClick={() => {
                    navigation.navigate('searchAddressScreen')
                }}>
                    <Ionicons color={'#4522A0'} name={'md-locate'} size={32} />
                    <Ionicons color={'#4522A0'} name={'md-add'} size={32} />
                </ClickableSettingItem>

                {
                    //  <ClickableSettingItem title={'Add home address'} onClick={() => {
                    //      navigation.navigate('searchAddressScreen')
                    //  }}>
                    //      <Ionicons color={'#4522A0'} name={'md-home'} size={32} />
                    //      <Ionicons color={'#4522A0'} name={'md-add'} size={32} />
                    //  </ClickableSettingItem>
                    //  
                    //  <ClickableSettingItem title={'Add work address'} onClick={() => { console.log('Add work address') }}>
                    //      <Ionicons color={'#4522A0'} name={'md-business'} size={32} />
                    //      <Ionicons color={'#4522A0'} name={'md-add'} size={32} />
                    //  </ClickableSettingItem>
                    //  
                    //  <ClickableSettingItem title={'Add other address'} onClick={() => { console.log('Add other address') }}>
                    //      <Ionicons color={'#4522A0'} name={'md-locate'} size={32} />
                    //      <Ionicons color={'#4522A0'} name={'md-add'} size={32} />
                    //  </ClickableSettingItem>
                }
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
