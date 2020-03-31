import React from 'react'
import { ScrollView } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

import SettingItem from '../components/SettingItem'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LogoutPopup from '../components/popups/LogoutPopup'

class LogoutItem extends React.PureComponent {
    state = {
        scaleAnimationModal: false
    }

    setPopupState = (state) => {
        this.setState(state)
    }

    render() {
        return (
            <React.Fragment>
                <LogoutPopup navigation={this.props.navigation} scaleAnimationModal={this.state.scaleAnimationModal} setPopupState={this.setPopupState} />
                <TouchableOpacity onPress={() => { this.setPopupState({ scaleAnimationModal: true }) }}>
                    <SettingItem title={'Logout'}>
                        <MaterialIcons color={'#4522A0'} name={'exit-to-app'} size={40} />
                    </SettingItem>
                </TouchableOpacity>
            </React.Fragment>
        )
    }
}


const ProfileScreen = ({ navigation }) => (
    <ScrollView>

        <SettingItem title={'Muhammet Ipek'}>
            <Ionicons color={'#4522A0'} name={'md-person'} size={40} />
        </SettingItem>

        <SettingItem title={'muhammetipek57@hotmail.com'}>
            <Ionicons color={'#4522A0'} name={'md-mail-open'} size={40} />
        </SettingItem>

        <SettingItem title={'(546) 813-3198'}>
            <Ionicons color={'#4522A0'} name={'md-phone-portrait'} size={40} />
        </SettingItem>

        <TouchableOpacity onPress={() => { navigation.navigate('addresses') }}>
            <SettingItem title={'Addresses'}>
                <MaterialIcons color={'#4522A0'} name={'place'} size={40} />
            </SettingItem>
        </TouchableOpacity>

        <SettingItem title={'Favorite Products'}>
            <Ionicons color={'#4522A0'} name={'md-heart'} size={40} />
        </SettingItem>

        <SettingItem title={'Previous Orders'}>
            <Ionicons color={'#4522A0'} name={'md-basket'} size={40} />
        </SettingItem>

        <SettingItem title={'Previous Invoices'}>
            <Ionicons color={'#4522A0'} name={'md-document'} size={40} />
        </SettingItem>

        <SettingItem title={'Payment Options'}>
            <Ionicons color={'#4522A0'} name={'ios-card'} size={40} />
        </SettingItem>

        <SettingItem title={'Invoice Information'}>
            <Ionicons color={'#4522A0'} name={'md-document'} size={40} />
        </SettingItem>

        <SettingItem title={'Change Password'}>
            <Ionicons color={'#4522A0'} name={'md-lock'} size={40} />
        </SettingItem>

        <SettingItem title={'Communication Options'}>
            <Ionicons color={'#4522A0'} name={'md-notifications'} size={40} />
        </SettingItem>

        <SettingItem title={'Support'}>
            <Ionicons color={'#4522A0'} name={'md-help-circle-outline'} size={40} />
        </SettingItem>

        <LogoutItem navigation={navigation}/>

        <SettingItem title={'English'} />

        <SettingItem title={'2.5.5'} />

    </ScrollView>
)

export default ProfileScreen