import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { connect } from 'react-redux'
import { Text, StyleSheet } from 'react-native'
import Modal, { ModalTitle, ModalButton, ModalFooter, ModalContent } from 'react-native-modals'

const ConfirmAddressPopup = ({ address, scaleAnimationModal, setPopupState }) => (
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
                style={styles.title}
                textStyle={styles.titleText}
                title='Do you confirm that your address is true?'
                hasTitleBar={false} />
        }
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
                        setPopupState(false, true, address)
                    }}
                    key='button-2' />
            </ModalFooter>
        }>
        <ModalContent style={styles.content}>
            <Text numberOfLines={3} style={styles.contentText}>{address}</Text>
        </ModalContent>
    </Modal>
)

const styles = StyleSheet.create({
    footer: { height: RFValue(42, 600) },
    buttonNo: { backgroundColor: '#697488' },
    buttonYes: { backgroundColor: '#5D3EBD' },
    buttonText: { color: 'white' },
    title: { marginVertical: RFValue(8, 600) },
    titleText: { textAlign: 'center', color: '#5D3EBD', fontWeight: '600', fontSize: RFValue(19, 600) },
    content: { alignItems: 'center', justifyContent: 'center' },
    contentText: { fontSize: RFValue(16, 600), color: '#303030', fontWeight: 'bold', textAlign: 'center' }
})

const mapStateToProps = ({
    mapReducer: {
        address
    }
}) => ({
    address
})

export default connect(mapStateToProps)(ConfirmAddressPopup)