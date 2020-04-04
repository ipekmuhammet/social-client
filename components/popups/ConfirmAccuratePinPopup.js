import React from 'react'
import { connect } from 'react-redux'
import { Image, Text } from 'react-native'

import Modal, {
    ModalButton,
    ModalFooter,
    ModalContent
} from 'react-native-modals'

import { addAddress } from '../../actions/actions4'

const ConfirmAccuratePinPopup = ({ scaleAnimationModal, setPopupState, region }) => (
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
                        setPopupState(false, true, region)
                    }}
                    key='button-2' />
            </ModalFooter>
        }>
        <ModalContent style={{ backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ height: 92 }} resizeMode={'contain'} source={require('../../assets/pin.png')} />
            <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 12, marginBottom: -6, textAlign: 'center' }}>Your order will be delivered to the pin location on the map. Do you confirm pin location is accurate?</Text>
        </ModalContent>
    </Modal>
)

const mapDispatchToProps = {
    addAddress
}

const mapStateToProps = ({
    mapReducer: {
        region
    }
}) => ({
    region
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmAccuratePinPopup)