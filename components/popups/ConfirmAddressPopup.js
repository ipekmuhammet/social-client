import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import Modal, {
    ModalTitle,
    ModalButton,
    ModalFooter,
    ModalContent
} from 'react-native-modals'

const ConfirmAddressPopup = ({ address, token, scaleAnimationModal, setPopupState }) => (
    <Modal
        onTouchOutside={() => {
            setPopupState(false)
        }}
        width={0.9}
        visible={scaleAnimationModal}
        onSwipeOut={() => setPopupState(false)}
        onHardwareBackPress={() => {
            setPopupState(false)
            return true
        }}
        modalTitle={
            <ModalTitle
                style={{ marginVertical: 8 }}
                textStyle={{ textAlign: 'center', color: '#5D3EBD', fontWeight: '600', fontSize: 20 }}
                title='Do you confirm that your address is true?'
                hasTitleBar={false} />
        }
        footer={
            <ModalFooter style={{ height: 42 }}>
                <ModalButton
                    text='No'
                    textStyle={{ color: 'white' }}
                    style={{ backgroundColor: '#697488' }}
                    onPress={() => {
                        setPopupState(false)
                    }}
                    key='button-1' />
                <ModalButton
                    text='Yes'
                    textStyle={{ color: 'white' }}
                    style={{ backgroundColor: '#5D3EBD' }}
                    onPress={() => {
                        setPopupState(false, true, address, token)
                    }}
                    key='button-2' />
            </ModalFooter>
        }>
        <ModalContent style={{ alignItems: 'center', justiftContent: 'center' }}>
            <Text numberOfLines={3} style={{ fontSize: 17, color: '#303030', fontWeight: 'bold', textAlign: 'center' }}>{address}</Text>
        </ModalContent>
    </Modal>
)

const mapStateToProps = ({
    reducer4: {
        token
    },
    mapReducer: {
        address
    }
}) => ({
    address,
    token
})

export default connect(mapStateToProps)(ConfirmAddressPopup)