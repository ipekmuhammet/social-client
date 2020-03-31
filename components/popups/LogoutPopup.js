import React from 'react'
import { connect } from 'react-redux'
import Modal, {
    ModalTitle,
    ModalButton,
    ModalFooter
} from 'react-native-modals'

import { logout } from '../../actions/actions4'

const LogoutPopup = ({ scaleAnimationModal, navigation, setPopupState, logout }) => (
    <Modal
        onTouchOutside={() => {
            setPopupState({ scaleAnimationModal: false });
        }}
        width={0.9}
        visible={scaleAnimationModal}
        onSwipeOut={() => setPopupState({ scaleAnimationModal: false })}
        // modalAnimation={new ScaleAnimation()}
        onHardwareBackPress={() => {
            console.log('onHardwareBackPress');
            setPopupState({ scaleAnimationModal: false });
            return true;
        }}
        modalTitle={
            <ModalTitle
                style={{ marginVertical: 8 }}
                textStyle={{ textAlign: 'center' }}
                title='Are you sure you want to log out?'
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
                        setPopupState({ scaleAnimationModal: false });
                    }}
                    key="button-1"
                />
                <ModalButton
                    text='Yes'
                    textStyle={{ color: 'white' }}
                    style={{ backgroundColor: '#5D3EBD' }}
                    onPress={() => {
                        setPopupState({ scaleAnimationModal: false })
                        logout(navigation)
                    }}
                    key="button-2"
                />
            </ModalFooter>
        } />
)

const mapDispatchToProps = {
    logout
}

export default connect(null, mapDispatchToProps)(LogoutPopup)