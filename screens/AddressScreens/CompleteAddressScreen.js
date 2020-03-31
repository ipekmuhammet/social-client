import React from 'react'
import { View, TouchableOpacity, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'
import axios from 'axios'
import { Ionicons } from '@expo/vector-icons'
import { addAddress } from '../../actions/actions4'

import ConfirmAddressPopup from '../../components/popups/ConfirmAddressPopup'

class CompleteAddressScreen extends React.Component {

    state = {
        region: {
            latitude: 41.0381665,
            longitude: 28.9417276,
            latitudeDelta: 0.0035,
            longitudeDelta: 0.0035,
        },
        scaleAnimationModal: false
    }

    getAddress = (region) => (
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${region.latitude},${region.longitude}&key=AIzaSyDOKcW0tFvi_T9vFyERfUDh20IxfTfBsmA`)
            .then(({ data }) => data.results[0].formatted_address)
    )


    onRegionChange = (region) => {
        this.setState({ region })
        this.getAddress(region).then((address) => {
            this.setState({ address })
        })
    }

    setPopupState = (scaleAnimationModal, complete) => {
        this.setState({ scaleAnimationModal })
        if (complete) {
            this.props.addAddress(this.props.route.params.address, this.props.token)
            this.props.navigation.pop(3)
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ConfirmAddressPopup address={this.props.route.params.address} scaleAnimationModal={this.state.scaleAnimationModal} setPopupState={this.setPopupState} />
                <View style={{ flex: 1.4 }} />
                <View style={{ flex: 3, backgroundColor: 'pink' }}>
                    <View style={{ flex: 1, margin: 2, flexDirection: 'row' }}>
                        <View style={{ flex: 1, margin: 2 }}>
                        </View>
                        <View style={{ flex: 2, margin: 2 }}>
                        </View>
                    </View>
                    <View style={{ flex: 1, margin: 2 }}>
                    </View>
                    <View style={{ flex: 1, margin: 2, flexDirection: 'row' }}>
                        <View style={{ flex: 1, margin: 2 }}>
                            <TextInput placeholder={'Building No'} style={{ flex: 1, borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 6, borderRadius: 12, paddingHorizontal: 16, fontSize: 22 }} />
                        </View>
                        <View style={{ flex: 1, margin: 2 }}>
                            <TextInput placeholder={'Floor'} style={{ flex: 1, borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 6, borderRadius: 12, paddingHorizontal: 16, fontSize: 22 }} />
                        </View>
                        <View style={{ flex: 1, margin: 2 }}>
                            <TextInput placeholder={'Apt No'} style={{ flex: 1, borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 6, borderRadius: 12, paddingHorizontal: 16, fontSize: 22 }} />
                        </View>
                    </View>
                    <View style={{ flex: 1, margin: 2 }}>
                        <TextInput placeholder={'Directions'} style={{ flex: 1, borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 6, borderRadius: 12, paddingHorizontal: 16, fontSize: 22 }} />
                    </View>
                    <View style={{ flex: 1, margin: 2 }}>
                        <TouchableOpacity
                            onPress={() => { this.setPopupState(true) }}
                            style={{ flex: 1, backgroundColor: '#5D3EBD', alignItems: 'center', justifyContent: 'center', margin: 6, borderRadius: 12 }}>
                            <Text style={{ fontSize: 22, color: 'white' }}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({
    reducer4: {
        token
    }
}) => ({
    token
})

const mapDispatchToProps = {
    addAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(CompleteAddressScreen)