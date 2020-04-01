import React from 'react'
import { View, TouchableOpacity, Image, Text, TextInput, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import axios from 'axios'
import { Ionicons } from '@expo/vector-icons'

import ConfirmAccuratePinPopup from '../../components/popups/ConfirmAccuratePinPopup'

class PinAddressScreen extends React.PureComponent {

    state = {
        region: {
            ...this.props.route.params.location,
            latitudeDelta: 0.0035,
            longitudeDelta: 0.0035,
        },
        address: '',
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

    UNSAFE_componentWillMount() {
        this.getAddress(this.state.region).then((address) => {
            this.setState({ address })
        })
    }

    setPopupState = (scaleAnimationModal, navigate) => {
        this.setState({ scaleAnimationModal })
        if (navigate) {
            this.props.navigation.navigate('completeAddressScreen', { address: this.state.address, region: this.state.region })
        }
    }

    render() {
        return (
            <View style={{
                flex: 1,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'flex-end',
                alignItems: 'center'
            }}>

                <ConfirmAccuratePinPopup
                    setPopupState={this.setPopupState}
                    scaleAnimationModal={this.state.scaleAnimationModal} />

                <View
                    style={{
                        position: 'absolute', top: 0, height: 56, left: 0, right: 0, backgroundColor: 'white', zIndex: 2, display: 'flex',
                        flexDirection: 'row', alignItems: 'center', borderRadius: 16, margin: 18, paddingHorizontal: 12
                    }}>
                    <Ionicons name={'md-pin'} size={32} color={'#5D3EBD'} />
                    <TextInput
                        style={{ margin: 8, marginHorizontal: 4, flex: 1, fontSize: 20, padding: 8, paddingHorizontal: 8, color: '#757B8B' }}
                        value={this.state.address} />
                </View>


                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2,
                    }} pointerEvents="none">
                    <Image style={{ width: 42, height: 42 }} source={require('../../assets/map-marker.png')} />
                </View>

                <MapView
                    style={StyleSheet.absoluteFillObject}
                    tracksViewChanges={false}
                    loadingEnabled={true}
                    showsCompass={false}
                    initialRegion={this.state.region}
                    customMapStyle={[
                        {
                            featureType: 'poi',
                            elementType: 'labels.text',
                            stylers: [
                                {
                                    visibility: 'off'
                                }
                            ]
                        },
                        {
                            featureType: 'poi.business',
                            stylers: [
                                {
                                    visibility: 'off'
                                }
                            ]
                        },
                        {
                            featureType: 'road',
                            elementType: 'labels.icon',
                            stylers: [
                                {
                                    visibility: 'off'
                                }
                            ]
                        },
                        {
                            featureType: 'transit',
                            stylers: [
                                {
                                    visibility: 'off'
                                }
                            ]
                        }
                    ]}
                    onRegionChangeComplete={this.onRegionChange} />

                <View
                    style={{
                        position: 'absolute', bottom: 0, height: 78, left: 0, right: 0, backgroundColor: 'white', zIndex: 2, display: 'flex',
                        flexDirection: 'row', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 24
                    }}>

                    <TouchableOpacity
                        style={{ flex: 1, padding: 12, backgroundColor: '#5D3EBD', borderRadius: 16 }}
                        onPress={() => {
                            this.setPopupState(true)
                        }}>
                        <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Use This Address</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default PinAddressScreen