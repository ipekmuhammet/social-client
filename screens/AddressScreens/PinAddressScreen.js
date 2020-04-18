import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { View, TouchableOpacity, Image, Text, StyleSheet  } from 'react-native'

import ConfirmAccuratePinPopup from '../../components/popups/ConfirmAccuratePinPopup'

import HeaderAddressInput from '../MapScreens/HeaderAddressInput'
import Map from '../MapScreens/Map'

class PinAddressScreen extends React.PureComponent {

    state = {
        scaleAnimationModal: false
    }

    setPopupState = (scaleAnimationModal, navigate, region) => {
        this.setState({ scaleAnimationModal })
        if (navigate) {
            this.props.navigation.navigate('completeAddressScreen', { region })
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <ConfirmAccuratePinPopup setPopupState={this.setPopupState} scaleAnimationModal={this.state.scaleAnimationModal} />

                <HeaderAddressInput />

                <Map region={this.props.route.params.region}/>

                <View style={styles.markerContainer} pointerEvents='none'>
                    <Image style={styles.marker} source={require('../../assets/map-marker.png')} />
                </View>

                <View style={styles.buttonContainer}>

                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            this.setPopupState(true)
                        }}>
                        <Text style={styles.buttonText}>Use This Address</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center' },
    markerContainer: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', zIndex: RFValue(2, 600), },
    marker: { width: 48, height: 48 },
    buttonContainer: {
        position: 'absolute', bottom: 0, height: 78, left: 0, right: 0, backgroundColor: 'transparent', zIndex: RFValue(2, 600), display: 'flex',
        flexDirection: 'row', alignItems: 'center', paddingHorizontal: RFValue(24, 600), paddingVertical: RFValue(24, 600)
    },
    button: { flex: 1, padding: RFValue(12, 600), backgroundColor: '#5D3EBD', borderRadius: 10 },
    buttonText: { fontSize: RFValue(20, 600), color: 'white', textAlign: 'center' }
})

export default PinAddressScreen