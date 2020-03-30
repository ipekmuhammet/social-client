import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'

import Modal, {
    ModalTitle,
    ModalButton,
    ModalFooter,
    ModalContent
} from 'react-native-modals'

import { addAddress } from '../../actions/actions4'

class ConfirmAddressPopup extends React.PureComponent {

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
                modalTitle={
                    <ModalTitle
                        style={{ marginVertical: 8 }}
                        textStyle={{ textAlign: 'center', color: '#5D3EBD', fontWeight: '600', fontSize: 20 }}
                        title='Do you confirm that your address is true?'
                        hasTitleBar={false}
                    />
                }
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
                                this.props.addAddress('Ahmet Rüfai Sok., No:1', this.props.token)
                                this.setState({ scaleAnimationModal: false });
                            }}
                            key="button-1"
                        />
                    </ModalFooter>
                }>
                <ModalContent style={{ alignItems: 'center', justiftContent: 'center' }}>
                    <Text style={{ fontSize: 20, color: '#303030', fontWeight: 'bold' }}>Ahmet Rüfai Sok., No:1</Text>
                </ModalContent>
            </Modal>
        )
    }
}

const mapDispatchToProps = {
    addAddress
}

export default connect(null, mapDispatchToProps)(ConfirmAddressPopup)