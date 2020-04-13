import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { Image, Text, StyleSheet } from 'react-native'
import Modal, { ModalButton, ModalFooter, ModalContent } from 'react-native-modals'

const PasswordChangedPopup = ({ scaleAnimationModal, setPopupState }) => (
    <Modal
        onTouchOutside={() => {
            setPopupState({ scaleAnimationModal: false })
        }}
        width={0.9}
        visible={scaleAnimationModal}
        onSwipeOut={() => setPopupState({ scaleAnimationModal: false })}
        onHardwareBackPress={() => {
            setPopupState({ scaleAnimationModal: false })
            return true
        }}
        footer={
            <ModalFooter style={styles.footer}>
                <ModalButton
                    text='OK'
                    textStyle={styles.buttonText}
                    style={styles.button}
                    onPress={() => {
                        console.log('Close')
                        setPopupState({ scaleAnimationModal: false })
                    }}
                    key='button-1' />
            </ModalFooter>
        }>
        <ModalContent style={styles.content}>
            <Image style={styles.image} source={require('../../assets/verify-image.jpeg')} />
            <Text style={styles.text}>Your password is changed</Text>
        </ModalContent>
    </Modal>
)

const styles = StyleSheet.create({
    footer: { height: RFValue(42, 600) },
    content: { backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
    image: { height: RFValue(72, 600) },
    text: { fontSize: RFValue(17, 600), fontWeight: 'bold', marginTop: RFValue(12, 600), marginBottom: -6 },
    button: { backgroundColor: '#5D3EBD' },
    buttonText: { color: 'white' }
})

export default PasswordChangedPopup