import React from 'react'
import { ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import InputComponent from '../components/InputComponent'
import ButtonComponent from '../components/ButtonComponent'
import InputIcon from '../components/InputIcon'

class EditProfileScreen extends React.PureComponent {

    state = {
        nameSurname: 'Muhammet Ipek',
        phoneNumber: '905468133198',
        email: 'muhammetipek57@hotmail.com',
    }

    onNameSurnameChange = (nameSurname) => {
        this.setState({ nameSurname })
    }

    onEmailChange = (email) => {
        this.setState({ email })
    }

    onPhoneChange = (phoneNumber) => {
        this.setState({ phoneNumber })
    }

    onSaveClick = () => {
        console.log(2)
    }

    render() {
        return (
            <ScrollView>

                <InputComponent
                    value={this.state.nameSurname}
                    onChange={this.onNameSurnameChange}>

                    <InputIcon>
                        <Ionicons size={32} name={'md-person'} />
                    </InputIcon>

                </InputComponent>

                <InputComponent
                    options={{
                        keyboardType: 'phone-pad',
                        textContentType: 'telephoneNumber',
                        placeholder: 'Phone Number'
                    }}
                    value={this.state.phoneNumber}
                    onChange={this.onPhoneChange}>

                    <InputIcon>
                        <Ionicons size={32} name={'md-phone-portrait'} />
                    </InputIcon>

                </InputComponent>

                <InputComponent
                    options={{
                        keyboardType: 'email-address',
                        textContentType: 'emailAddress',
                        placeholder: 'E-mail'
                    }}
                    value={this.state.email}
                    onChange={this.onEmailChange}>

                    <InputIcon>
                        <Ionicons size={32} name={'md-mail-open'} />
                    </InputIcon>

                </InputComponent>

                <ButtonComponent text={'Kaydet'} onClick={this.onSaveClick} />

            </ScrollView>
        )
    }
}

export default EditProfileScreen