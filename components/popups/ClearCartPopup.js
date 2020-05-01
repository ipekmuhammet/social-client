import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Modal, {
    ModalTitle,
    ModalButton,
    ModalFooter
} from 'react-native-modals'

import { clearCart } from '../../actions/actions1'
import { setClearCartPopupState } from '../../actions/global-actions'

const ClearCartPopup = ({ clearCartPopupState, setClearCartPopupState, clearCart, token }) => (
    <Modal
        onTouchOutside={() => {
            setClearCartPopupState(false)
        }}
        width={0.9}
        visible={clearCartPopupState}
        onSwipeOut={() => setClearCartPopupState(false)}
        onHardwareBackPress={() => {
            setClearCartPopupState(false)
            return true
        }}
        modalTitle={
            <ModalTitle
                style={styles.title}
                textStyle={styles.titleText}
                title='Sepeti boşatmak istediğinden emin misin?'
                hasTitleBar={false} />
        }
        footer={
            <ModalFooter style={styles.footer}>
                <ModalButton
                    text='Hayır'
                    textStyle={styles.buttonText}
                    style={styles.buttonNo}
                    onPress={() => {
                        setClearCartPopupState(false)
                    }}
                    key='button-1' />
                <ModalButton
                    text='Evet'
                    textStyle={styles.buttonText}
                    style={styles.buttonYes}
                    onPress={() => {
                        setClearCartPopupState(false)
                        clearCart(token)
                    }}
                    key='button-2' />
            </ModalFooter>
        } />
)

const styles = StyleSheet.create({
    footer: { height: RFValue(42, 600) },
    buttonNo: { backgroundColor: '#697488' },
    buttonYes: { backgroundColor: '#5D3EBD' },
    buttonText: { color: 'white' },
    title: { marginVertical: RFValue(6, 600) },
    titleText: { textAlign: 'center', fontSize: RFValue(16, 600) }
})

const mapStateToProps = ({
    globalReducer: {
        clearCartPopupState
    },
    reducer4: {
        token
    }
}) => ({
    clearCartPopupState,
    token
})

const mapDispatchToProps = {
    clearCart,
    setClearCartPopupState
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearCartPopup)