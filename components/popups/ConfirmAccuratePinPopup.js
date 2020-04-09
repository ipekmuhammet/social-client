import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { connect } from 'react-redux'
import { Image, Text, StyleSheet } from 'react-native'
import Modal, { ModalButton, ModalFooter, ModalContent } from 'react-native-modals'

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
            <ModalFooter style={styles.footer}>
                <ModalButton
                    text='No'
                    textStyle={styles.buttonText}
                    style={styles.buttonNo}
                    onPress={() => {
                        setPopupState(false)
                    }}
                    key='button-1' />
                <ModalButton
                    text='Yes'
                    textStyle={styles.buttonText}
                    style={styles.buttonYes}
                    onPress={() => {
                        setPopupState(false, true, region)
                    }}
                    key='button-2' />
            </ModalFooter>
        }>
        <ModalContent style={styles.content}>
            <Image style={styles.contentImage} resizeMode={'contain'} source={require('../../assets/pin.png')} />
            <Text style={styles.contentText}>Your order will be delivered to the pin location on the map. Do you confirm pin location is accurate?</Text>
        </ModalContent>
    </Modal>
)

const styles = StyleSheet.create({
    footer: { height: RFValue(42, 600) },
    buttonNo: { backgroundColor: '#697488' },
    buttonYes: { backgroundColor: '#5D3EBD' },
    buttonText: { color: 'white' },
    content: { backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
    contentImage: { height: RFValue(92, 600) },
    contentText: {
        fontSize: RFValue(17, 600), fontWeight: 'bold',
        marginTop: RFValue(12, 600), marginBottom: -6, textAlign: 'center'
    }
})

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