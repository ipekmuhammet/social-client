import React from 'react'

import ConnectionPopup from '../components/popups/ConnectionPopup'
import NeedToLoginPopup from '../components/popups/NeedToLoginPopup'

const GlobalScreen = () => (
    <React.Fragment>
        <ConnectionPopup />
        <NeedToLoginPopup />
    </React.Fragment>
)

export default GlobalScreen