import React from 'react'
import { View, TouchableOpacity, Image, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'
import axios from 'axios'
import { addAddress } from '../../actions/actions4'

import ConfirmAddressPopup from '../../components/popups/ConfirmAddressPopup'

class CompleteAddressScreen extends React.Component {

    state = {
        region: this.props.route.params.region,
        address: this.props.route.params.address,
        scaleAnimationModal: false,
        addressTitle: 'Home',
        buildingNo: '',
        floor: '',
        aptNo: '',
        directions: ''
    }

    getAddress = (region) => (
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${region.latitude},${region.longitude}&key=AIzaSyDOKcW0tFvi_T9vFyERfUDh20IxfTfBsmA`)
            .then(({ data }) => data.results[0].formatted_address)
    )


    onRegionChange = (region) => {
        this.getAddress(region).then((address) => {
            this.setState({ address, region })
        })
    }

    setPopupState = (scaleAnimationModal, complete) => {
        this.setState({ scaleAnimationModal })
        if (complete) {
            this.props.addAddress(this.state.address, this.props.token)
            this.props.navigation.pop(3)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ConfirmAddressPopup address={this.state.address} region={this.state.region} scaleAnimationModal={this.state.scaleAnimationModal} setPopupState={this.setPopupState} />
                <View style={styles.mapContainer}>
                    <View style={styles.markerContainer} pointerEvents="none">
                        <Image style={styles.marker} source={require('../../assets/map-marker.png')} />
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
                        ]} />
                </View>
                <View style={styles.body}>
                    <View style={styles.inputContainerChild}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder={'Address Icon'}
                                style={styles.input} />
                        </View>
                        <View style={styles.input2container}>
                            <TextInput
                                onChangeText={(addressTitle) => { this.setState({ addressTitle }) }}
                                value={this.state.addressTitle} placeholder={'Address title (Home, Work)'}
                                style={styles.input} />
                        </View>
                    </View>
                    <View style={styles.inputContainerChild}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                value={this.state.address}
                                onChangeText={(address) => { this.setState({ address }) }}
                                placeholder={'Address'}
                                style={styles.input} />
                        </View>
                    </View>
                    <View style={styles.inputContainerChild}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                value={this.state.buildingNo}
                                keyboardType={'number-pad'}
                                onChangeText={(buildingNo) => { this.setState({ buildingNo }) }}
                                placeholder={'Building No'}
                                style={styles.input} />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                value={this.state.floor}
                                keyboardType={'number-pad'}
                                onChangeText={(floor) => { this.setState({ floor }) }}
                                placeholder={'Floor'}
                                style={styles.input} />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                value={this.state.aptNo}
                                keyboardType={'number-pad'}
                                onChangeText={(aptNo) => { this.setState({ aptNo }) }}
                                placeholder={'Apt No'}
                                style={styles.input} />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            onChangeText={(directions) => { this.setState({ directions }) }}
                            value={this.state.directions}
                            placeholder={'Directions'}
                            style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <TouchableOpacity
                            onPress={() => { this.setPopupState(true) }}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    mapContainer: { flex: 1.4 },
    body: { flex: 3, marginVertical: 12 },
    markerContainer: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', zIndex: 2 },
    marker: { width: 48, borderColor: '#C3C3C3', height: 48 },
    inputContainer: { flex: 1, margin: 2 },
    input2Container: { flex: 2, margin: 2 },
    inputContainerChild: { flex: 1, margin: 2, flexDirection: 'row' },
    input: {
        flex: 1, borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: 3, borderRadius: 8,
        borderColor: '#C3C3C3', paddingHorizontal: 13, fontSize: 18
    },
    button: { flex: 1, backgroundColor: '#5D3EBD', alignItems: 'center', justifyContent: 'center', margin: 3, borderRadius: 8 },
    buttonText: { fontSize: 18, color: 'white' }
})

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