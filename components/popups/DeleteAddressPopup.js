import React from 'react'
import { connect } from 'react-redux'

import Modal, {
    ModalTitle,
    ModalButton,
    ModalFooter
} from 'react-native-modals'

import { deleteAddress } from '../../actions/actions4'

class DeleteAddressPopup extends React.PureComponent {

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
                        textStyle={{ textAlign: 'center' }}
                        title='Are you sure you want to delete you address?'
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
                                this.props.deleteAddress(this.props.addressId, this.props.token)
                                this.setState({ scaleAnimationModal: false });
                            }}
                            key="button-1"
                        />
                    </ModalFooter>
                }>
            </Modal>
        )
    }
}

const mapDispatchToProps = {
    deleteAddress
}

export default connect(null, mapDispatchToProps)(DeleteAddressPopup)