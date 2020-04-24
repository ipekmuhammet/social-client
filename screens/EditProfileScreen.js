import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { updateProfile } from '../actions/actions4'

import InputComponent from '../components/InputComponent'
import ButtonComponent from '../components/ButtonComponent'
import InputIcon from '../components/InputIcon'

class EditProfileScreen extends React.PureComponent {

    state = {
        nameSurname: this.props.user.nameSurname,
        phoneNumber: this.props.user.phoneNumber,
        email: this.props.user.email
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
        this.props.updateProfile({
            nameSurname: this.state.nameSurname,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email
        }, () => {
            this.props.navigation.goBack()
        })
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>

                <View>
                    <InputComponent
                        options={{
                            textContentType: 'name',
                            placeholder: 'Name Surname'
                        }}
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
                </View>

                <ButtonComponent text={'Kaydet'} onClick={this.onSaveClick} />

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'space-between' }
})

const mapStateToProps = ({
    reducer4: {
        user
    }
}) => ({
    user
})

const mapDispatchToProps = {
    updateProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileScreen)