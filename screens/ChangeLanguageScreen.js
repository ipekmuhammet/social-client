import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import LanguageItem from '../components/LanguageItem'

const ChangeLanguageScreen = ({ navigation, token }) => (
    <ScrollView>

        <TouchableOpacity onPress={() => {
            console.log('Set language to English')
            navigation.goBack()
        }}>
            <LanguageItem title={'English'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            console.log('Set language to Türkçe')
            navigation.goBack()
        }}>
            <LanguageItem title={'Türkçe'} />
        </TouchableOpacity>

    </ScrollView>
)

const mapStateToProps = ({
    reducer4: {
        token
    }
}) => ({
    token
})

export default connect(mapStateToProps)(ChangeLanguageScreen)