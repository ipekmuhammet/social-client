import React from 'react'
import { connect } from 'react-redux'
import { Text, StyleSheet } from 'react-native'
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
                        setPopupState(false, true, address, token)
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
    footer: { height: 42 },
    buttonNo: { backgroundColor: '#697488' },
    buttonYes: { backgroundColor: '#5D3EBD' },
    buttonText: { color: 'white' },
    title: { marginVertical: 8 },
    titleText: { textAlign: 'center', color: '#5D3EBD', fontWeight: '600', fontSize: 20 },
    content: { alignItems: 'center', justifyContent: 'center' },
    contentText: { fontSize: 17, color: '#303030', fontWeight: 'bold', textAlign: 'center' }
})

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