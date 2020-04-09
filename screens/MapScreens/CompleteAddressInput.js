import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { connect } from 'react-redux'
import { TextInput, StyleSheet } from 'react-native'

import { setAddress } from '../../actions/map-actions'

const CompleteAddressInput = ({ address }) => (
    <TextInput
        value={address}
        onChangeText={(address) => { this.setState({ address }) }}
        placeholder={'Address'}
        style={styles.input} />
)

const styles = StyleSheet.create({
    input: {
        flex: 1, borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: RFValue(3, 600),
        borderRadius: RFValue(8, 600),
        borderColor: '#C3C3C3', paddingHorizontal: RFValue(13, 600), fontSize: RFValue(18, 600)
    }
})

const mapStateToProps = ({
    mapReducer: {
        region,
        address
    }
}) => ({
    region,
    address
})

const mapDispatchToProps = {
    setAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(CompleteAddressInput)