import React from 'react'
import { connect } from 'react-redux'
import { Image, Text } from 'react-native'

import Modal, {
    ModalTitle,
    ModalButton,
    ModalFooter,
    ModalContent
} from 'react-native-modals'

import { addAddress } from '../../actions/actions4'

class ConfirmAccuratePinPopup extends React.PureComponent {

    state = {
        scaleAnimationModal: true
    }

    render() {
        return (
            <Modal
                onTouchOutside={() => {
                    this.setState({ scaleAnimationModal: false });
                }}
                width={0.9}
                visible={this.state.scaleAnimationModal}
                onSwipeOut={() => this.setState({ scaleAnimationModal: false })}
                // modalAnimation={new ScaleAnimation()}
                onHardwareBackPress={() => {
                    console.log('onHardwareBackPress');
                    this.setState({ scaleAnimationModal: false });
                    return true;
                }}
                footer={
                    <ModalFooter>
                        <ModalButton
                            text='No'
                            textStyle={{ color: 'white' }}
                            style={{ backgroundColor: '#697488' }}
                            onPress={() => {
                                this.setState({ scaleAnimationModal: false });
                            }}
                            key="button-1"
                        />
                        <ModalButton
                            text='Yes'
                            textStyle={{ color: 'white' }}
                            style={{ backgroundColor: '#5D3EBD' }}
                            onPress={() => {
                                // this.props.addAddress('Ahmet Rüfai Sok., No:1', this.props.token)
                                this.setState({ scaleAnimationModal: false });
                            }}
                            key="button-1"
                        />
                    </ModalFooter>
                }>
                <ModalContent style={{ backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ height: 120 }} resizeMode={'contain'} source={require('../../assets/pin.png')} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 12, marginBottom: -12, textAlign: 'center' }}>Your order will be delivered to the pin location on the map. Do you confirm pin location is accurate?</Text>
                </ModalContent>
            </Modal>
        )
    }
}

const mapDispatchToProps = {
    addAddress
}

export default connect(null, mapDispatchToProps)(ConfirmAccuratePinPopup)