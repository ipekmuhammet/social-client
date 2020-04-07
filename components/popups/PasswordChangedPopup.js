import React from 'react'
import { Image, Text, StyleSheet } from 'react-native'

import Modal, {
    ModalButton,
    ModalFooter,
    ModalContent
} from 'react-native-modals'

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
    footer: { height: 42 },
    content: { backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
    image: { height: 72 },
    text: { fontSize: 17, fontWeight: 'bold', marginTop: 12, marginBottom: -6 },
    button: { backgroundColor: '#5D3EBD' },
    buttonText: { color: 'white' }
})

export default PasswordChangedPopup