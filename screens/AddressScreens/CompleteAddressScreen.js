import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { ScrollView, View, TouchableOpacity, Image, Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import { connect } from 'react-redux'

import { saveAddress } from '../../actions/actions2'

import ConfirmAddressPopup from '../../components/popups/ConfirmAddressPopup'
import Map from '../MapScreens/Map'
import CompleteAddressInput from '../MapScreens/CompleteAddressInput'

class CompleteAddressScreen extends React.Component {

    state = {
        scaleAnimationModal: false,
        addressTitle: 'Home',
        buildingNo: '',
        floor: '',
        aptNo: '',
        directions: ''
    }

    setPopupState = (scaleAnimationModal, complete, address, token) => {
        this.setState({ scaleAnimationModal })
        if (complete) {
            this.props.saveAddress(address, token)
            this.props.navigation.pop(3)
        }
    }

    render() {
        return (
            <ScrollView>
                <ConfirmAddressPopup scaleAnimationModal={this.state.scaleAnimationModal} setPopupState={this.setPopupState} />
                <View style={styles.mapContainer}>

                    <Map region={this.props.route.params.region} />

                    <View style={styles.markerContainer} pointerEvents='none'>
                        <Image style={styles.marker} source={require('../../assets/map-marker.png')} />
                    </View>

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
                            <CompleteAddressInput />
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
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    mapContainer: { height: RFValue(136, 600) },
    body: { marginVertical: RFValue(12, 600) },
    markerContainer: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', zIndex: RFValue(2, 600) },
    marker: { width: RFValue(48, 600), borderColor: '#C3C3C3', height: RFValue(48, 600) },
    inputContainer: { height: RFValue(60, 600), margin: RFValue(2, 600), flex: 1 },
    input2Container: { flex: 2, margin: RFValue(2, 600) },
    inputContainerChild: { height: 62, margin: RFValue(2, 600), display: 'flex', flexDirection: 'row' },
    input: {
        flex: 1, borderWidth: 1, alignItems: 'center', justifyContent: 'center', margin: RFValue(3, 600),
        borderRadius: 8,
        borderColor: '#C3C3C3', paddingHorizontal: RFValue(13, 600), fontSize: RFValue(18, 600)
    },
    button: {
        flex: 1, backgroundColor: '#5D3EBD', alignItems: 'center', justifyContent: 'center', margin: RFValue(3, 600),
        borderRadius: 8
    },
    buttonText: { fontSize: RFValue(18, 600), color: 'white' }
})

const mapStateToProps = ({
    reducer4: {
        token
    }
}) => ({
    token
})

const mapDispatchToProps = {
    saveAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(CompleteAddressScreen)