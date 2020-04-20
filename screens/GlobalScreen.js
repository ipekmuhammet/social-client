import React from 'react'

import ConnectionPopup from '../components/popups/ConnectionPopup'
import NeedToLoginPopup from '../components/popups/NeedToLoginPopup'
import GlobalMessagePopup from '../components/popups/GlobalMessagePopup'

import { Ionicons } from '@expo/vector-icons'

const GlobalScreen = () => (
    <React.Fragment>
        <ConnectionPopup />
        <NeedToLoginPopup />
        <GlobalMessagePopup>
            <Ionicons name={'md-warning'} size={48} color={'red'} />
        </GlobalMessagePopup>
    </React.Fragment>
)

export default GlobalScreen