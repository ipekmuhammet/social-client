import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { Image, Text, StyleSheet } from 'react-native'
import Modal, { ModalButton, ModalFooter, ModalContent } from 'react-native-modals'

const ConnectionPopup = ({ scaleAnimationModal, setPopupState }) => (
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
                    text='Ok'
                    textStyle={styles.buttonText}
                    style={styles.buttonOk}
                    onPress={() => {
                        setPopupState(false)
                    }}
                    key='button-1' />
            </ModalFooter>
        }>
        <ModalContent style={styles.content}>
            <Image style={styles.contentImage} resizeMode={'contain'} source={require('../../assets/connection.png')} />
            <Text style={styles.contentText}>Please check your internet connection.</Text>
        </ModalContent>
    </Modal>
)

const styles = StyleSheet.create({
    footer: { height: RFValue(42, 600) },
    buttonOk: { backgroundColor: '#5D3EBD' },
    buttonText: { color: 'white' },
    content: { backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
    contentImage: { height: RFValue(72, 600) },
    contentText: {
        fontSize: RFValue(17, 600), fontWeight: 'bold',
        marginTop: RFValue(12, 600), marginBottom: -6, textAlign: 'center'
    }
})

export default ConnectionPopup