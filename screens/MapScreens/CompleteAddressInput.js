import React from 'react'
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
        flex: 1, borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 3, borderRadius: 8,
        borderColor: '#C3C3C3', paddingHorizontal: 13, fontSize: 18
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