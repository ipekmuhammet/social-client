import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

import { addAddress, deleteAddress } from '../../actions/actions4'

import InteractiveSettingItem from '../../components/InteractiveSettingItem'
import HeadingDivider from '../../components/HeadingDivider'

const AddressesScreen = ({ user, token, addAddress, deleteAddress }) => (
    <ScrollView style={styles.container}>

        {
            user.addresses.map(address => (
                <InteractiveSettingItem title={address.open_address} onRightIconClick={() => { deleteAddress(address._id, token) }}>
                    <Ionicons color={'#4522A0'} name={'md-home'} size={40} />
                    <Ionicons color={'#4522A0'} name={'md-trash'} size={40} />
                </InteractiveSettingItem>
            ))
        }

        <HeadingDivider title={'Add Address'} />

        <InteractiveSettingItem title={'Add home address'} onRightIconClick={() => { addAddress('MAMİ BABA SOKAK.', token) }} >
            <Ionicons color={'#4522A0'} name={'md-home'} size={40} />
            <Ionicons color={'#4522A0'} name={'md-add'} size={40} />
        </InteractiveSettingItem>

        <InteractiveSettingItem title={'Add work address'} onRightIconClick={() => { console.log('Add work address') }}>
            <Ionicons color={'#4522A0'} name={'md-business'} size={40} />
            <Ionicons color={'#4522A0'} name={'md-add'} size={40} />
        </InteractiveSettingItem>

        <InteractiveSettingItem title={'Add other address'} onRightIconClick={() => { console.log('Add other address') }}>
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

const mapStateToProps = ({
    reducer4: {
        user,
        token
    }
}) => ({
    user,
    token
})

const mapDispatchToProps = {
    addAddress,
    deleteAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressesScreen)
