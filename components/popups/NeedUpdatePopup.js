import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Modal, { ModalButton, ModalFooter, ModalContent } from 'react-native-modals'
import { RFValue } from 'react-native-responsive-fontsize'

//  import { expo } from '../../app.json'
//  expo.version // current version

const NeedUpdatePopup = () => (
    <Modal
        onTouchOutside={() => {
            // setPopupState({ scaleAnimationModal: false })
        }}
        width={0.9}
        visible={true}
        onSwipeOut={() => {
            // setPopupState({ scaleAnimationModal: false })
        }}
        onHardwareBackPress={() => {
            // setPopupState({ scaleAnimationModal: false })
            return true
        }}
        footer={
            <ModalFooter style={styles.footer}>

                <ModalButton
                    text='Close'
                    textStyle={styles.buttonText}
                    style={styles.buttonNo}
                    onPress={() => {
                        // setPopupState({ scaleAnimationModal: false })
                    }}
                    key='button-1' />

                <ModalButton
                    text='Update'
                    textStyle={styles.buttonText}
                    style={styles.buttonYes}
                    onPress={() => {
                        // setPopupState({ scaleAnimationModal: false })
                    }}
                    key='button-2' />

            </ModalFooter>
        }>

        <ModalContent style={styles.content}>
            <Text style={styles.text}>There are more recent version of our application. Please update to continue.</Text>
        </ModalContent>

    </Modal>
)

const styles = StyleSheet.create({
    footer: { height: RFValue(42, 600) },
    content: { backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
    text: { fontSize: RFValue(17, 600), fontWeight: 'bold', marginBottom: -6 },
    buttonNo: { backgroundColor: '#697488' },
    buttonYes: { backgroundColor: '#5D3EBD' },
    buttonText: { color: 'white' }
})

export default NeedUpdatePopup