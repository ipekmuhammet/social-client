import React from 'react'
import { Image, Text } from 'react-native'

import Modal, {
    ModalButton,
    ModalFooter,
    ModalContent
} from 'react-native-modals'

const PasswordChangedPopup = ({ scaleAnimationModal, setPopupState }) => (
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
        //  modalTitle={
        //      <ModalTitle
        //          title="Modal - Scale Animation"
        //          hasTitleBar={false}
        //      />
        //  }
        footer={
            <ModalFooter>
                <ModalButton
                    text='OK'
                    textStyle={{ color: 'white' }}
                    style={{ backgroundColor: '#5D3EBD' }}
                    onPress={() => {
                        console.log('Close')
                        setPopupState({ scaleAnimationModal: false });
                    }}
                    key="button-1"
                />
            </ModalFooter>
        }>
        <ModalContent style={{ backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ height: 80 }} source={require('../../assets/verify-image.jpeg')} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 12, marginBottom: -12 }}>Your password is changed</Text>
        </ModalContent>
    </Modal>
)

export default PasswordChangedPopup