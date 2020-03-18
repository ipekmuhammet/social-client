import React from 'react'
import { ScrollView } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

import SettingItem from '../components/SettingItem'

const ProfileScreen = () => (
    <ScrollView>
        <SettingItem title={'Muhammet Ipek'}>
            <Ionicons color={'#4522A0'} name={'md-person'} size={32} />
        </SettingItem>

        <SettingItem title={'muhammetipek57@hotmail.com'}>
            <Ionicons color={'#4522A0'} name={'md-mail-open'} size={32} />
        </SettingItem>

        <SettingItem title={'(546) 813-3198'}>
            <Ionicons color={'#4522A0'} name={'md-phone-portrait'} size={32} />
        </SettingItem>

        <SettingItem title={'Addresses'}>
            <MaterialIcons color={'#4522A0'} name={'place'} size={32} />
        </SettingItem>

        <SettingItem title={'Favorite Products'}>
            <Ionicons color={'#4522A0'} name={'md-heart'} size={32} />
        </SettingItem>

        <SettingItem title={'Previous Orders'}>
            <Ionicons color={'#4522A0'} name={'md-basket'} size={32} />
        </SettingItem>

        <SettingItem title={'Previous Invoices'}>
            <Ionicons color={'#4522A0'} name={'md-document'} size={32} />
        </SettingItem>

        <SettingItem title={'Payment Options'}>
            <Ionicons color={'#4522A0'} name={'ios-card'} size={32} />
        </SettingItem>

        <SettingItem title={'Invoice Information'}>
            <Ionicons color={'#4522A0'} name={'md-document'} size={32} />
        </SettingItem>

        <SettingItem title={'Change Password'}>
            <Ionicons color={'#4522A0'} name={'md-lock'} size={32} />
        </SettingItem>

        <SettingItem title={'Communication Options'}>
            <Ionicons color={'#4522A0'} name={'md-notifications'} size={32} />
        </SettingItem>

        <SettingItem title={'Support'}>
            <Ionicons color={'#4522A0'} name={'md-help-circle-outline'} size={32} />
        </SettingItem>

        <SettingItem title={'Logout'}>
            <MaterialIcons color={'#4522A0'} name={'exit-to-app'} size={32} />
        </SettingItem>

        <SettingItem title={'English'} />
        <SettingItem title={'2.5.5'} />

    </ScrollView>
)

export default ProfileScreen