import React from 'react'
import { Text } from 'react-native'

import Modal, {
    ModalTitle,
    ModalButton,
    ModalFooter,
    ModalContent
} from 'react-native-modals'

const ConfirmAddressPopup = ({ address, scaleAnimationModal, setPopupState }) => (
    <Modal
        onTouchOutside={() => {
            setPopupState(false);
        }}
        width={0.9}
        visible={scaleAnimationModal}
        onSwipeOut={() => setPopupState(false)}
        // modalAnimation={new ScaleAnimation()}
        onHardwareBackPress={() => {
            console.log('onHardwareBackPress');
            setPopupState(false);
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
                        setPopupState(false);
                    }}
                    key="button-1"
                />
                <ModalButton
                    text='Yes'
                    textStyle={{ color: 'white' }}
                    style={{ backgroundColor: '#5D3EBD' }}
                    onPress={() => {
                        setPopupState(false, true);
                    }}
                    key="button-1"
                />
            </ModalFooter>
        }>
        <ModalContent style={{ alignItems: 'center', justiftContent: 'center' }}>
            <Text numberOfLines={3} style={{ fontSize: 20, color: '#303030', fontWeight: 'bold' }}>{address}</Text>
        </ModalContent>
    </Modal>
)

export default ConfirmAddressPopup