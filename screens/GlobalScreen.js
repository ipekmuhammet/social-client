import React from 'react'
import { connect } from 'react-redux'

import ConnectionPopup from '../components/popups/ConnectionPopup'
import NeedToLoginPopup from '../components/popups/NeedToLoginPopup'

const GlobalScreen = ({ }) => (
    <React.Fragment>
        <ConnectionPopup />
        <NeedToLoginPopup />
    </React.Fragment>
)

const mapStateToProps = ({

}) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalScreen)