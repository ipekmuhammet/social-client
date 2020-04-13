import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { StyleSheet } from 'react-native'
import Modal, { ModalTitle, ModalButton, ModalFooter } from 'react-native-modals'
import { connect } from 'react-redux'

import { setNeedToLoginPopupState } from '../../actions/global-actions'

const NeedToLoginPopup = ({ needToLoginPopupState, setNeedToLoginPopupState }) => (
    <Modal
        onTouchOutside={() => {
            setNeedToLoginPopupState(false)
        }}
        width={0.9}
        visible={needToLoginPopupState}
        onSwipeOut={() => setNeedToLoginPopupState(false)}
        onHardwareBackPress={() => {
            setNeedToLoginPopupState(false)
            return true
        }}
        modalTitle={
            <ModalTitle
                style={styles.title}
                textStyle={styles.titleText}
                title='You need to login before continuing.'
                hasTitleBar={false} />
        }
        footer={
            <ModalFooter style={styles.footer}>
                <ModalButton
                    text='Ok'
                    textStyle={styles.buttonText}
                    style={styles.buttonOk}
                    onPress={() => {
                        setNeedToLoginPopupState(false)
                    }}
                    key='button-2' />
            </ModalFooter>
        } />
)

const styles = StyleSheet.create({
    footer: { height: RFValue(42, 600) },
    buttonOk: { backgroundColor: '#5D3EBD' },
    buttonText: { color: 'white' },
    title: { marginVertical: RFValue(8, 600) },
    titleText: { textAlign: 'center', fontSize: 17 }
})

const mapStateToProps = ({
    globalReducer: {
        needToLoginPopupState
    }
}) => ({
    needToLoginPopupState
})

const mapDispatchToProps = {
    setNeedToLoginPopupState
}

export default connect(mapStateToProps, mapDispatchToProps)(NeedToLoginPopup)