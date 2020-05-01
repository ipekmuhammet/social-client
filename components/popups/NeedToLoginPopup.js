import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { StyleSheet } from 'react-native'
import Modal, { ModalTitle, ModalButton, ModalFooter } from 'react-native-modals'
import { connect } from 'react-redux'

import { setNeedToLoginPopupState } from '../../actions/global-actions'

const NeedToLoginPopup = ({ navigation, needToLoginPopupState, setNeedToLoginPopupState }) => (
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
                title='Devam etmeden önce giriş yapmalısın'
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
                        if (navigation) {
                            navigation.navigate('Welcome', { screen: 'login' })
                        }
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
    titleText: { textAlign: 'center', fontSize: 16 }
})

const mapStateToProps = ({
    globalReducer: {
        needToLoginPopupState,
        navigation
    }
}) => ({
    needToLoginPopupState,
    navigation
})

const mapDispatchToProps = {
    setNeedToLoginPopupState
}

export default connect(mapStateToProps, mapDispatchToProps)(NeedToLoginPopup)