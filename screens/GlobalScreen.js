import React from 'react'
import { connect } from 'react-redux'

import ConnectionPopup from '../components/popups/ConnectionPopup'

const GlobalScreen = ({ }) => (
    <React.Fragment>
        <ConnectionPopup />
    </React.Fragment>
)

const mapStateToProps = ({

}) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalScreen)