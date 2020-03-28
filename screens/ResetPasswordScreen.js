import React from 'react'
import { View, TouchableOpacity, TextInput, Text, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Modal, {
    ScaleAnimation,
    ModalTitle,
    ModalButton,
    ModalFooter,
    ModalContent
} from 'react-native-modals'

class ResetPasswordScreen extends React.PureComponent {

    state = {
        scaleAnimationModal: false
    }

    render() {
        return (
            <View style={styles.container}>

                <Modal
                    onTouchOutside={() => {
                        this.setState({ scaleAnimationModal: false });
                    }}
                    width={0.9}
                    visible={this.state.scaleAnimationModal}
                    onSwipeOut={() => this.setState({ scaleAnimationModal: false })}
                    // modalAnimation={new ScaleAnimation()}
                    onHardwareBackPress={() => {
                        console.log('onHardwareBackPress');
                        // this.setState({ scaleAnimationModal: false });
                        return true;
                    }}
                    //  modalTitle={
                    //      <ModalTitle
                    //          title="Modal - Scale Animation"
                    //          hasTitleBar={false}
                    //      />
                    //  }
                    footer={
                        <ModalFooter>
                            <ModalButton
                                text='OK'
                                textStyle={{ color: 'white' }}
                                style={{ backgroundColor: '#5D3EBD' }}
                                onPress={() => {
                                    console.log('Close')
                                    this.setState({ scaleAnimationModal: false });
                                }}
                                key="button-1"
                            />
                        </ModalFooter>
                    }>
                    <ModalContent style={{ backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ height: 80 }} source={require('../assets/verify-image.jpeg')} />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 12, marginBottom: -12 }}>Your password is changed</Text>
                    </ModalContent>
                </Modal>

                <View style={[styles.child, { flexDirection: 'row' }]}>
                    <TextInput keyboardType={'phone-pad'} placeholder={'Country/Region Code'} style={{ flex: 1, margin: 4, borderRadius: 6, paddingHorizontal: 12, fontSize: 19, borderWidth: .8, borderColor: '#ABABAB' }} />
                    <TextInput keyboardType={'phone-pad'} placeholder={'Phone Number'} style={{ flex: 1, margin: 4, borderRadius: 6, paddingHorizontal: 12, fontSize: 19, borderWidth: .8, borderColor: '#ABABAB' }} />
                </View>

                <View style={[styles.child, { flexDirection: 'row' }]}>
                    <TextInput keyboardType={'number-pad'} placeholder={'Activation Code'} style={{ flex: 1, margin: 4, borderRadius: 6, paddingHorizontal: 12, fontSize: 19, borderWidth: .8, borderColor: '#ABABAB' }} />
                </View>

                <View style={[styles.child, { flexDirection: 'row' }]}>
                    <TextInput keyboardType={'number-pad'} placeholder={'New Password (min 4 characters)'} style={{ flex: 1, margin: 4, borderRadius: 6, paddingHorizontal: 12, fontSize: 19, borderWidth: .8, borderColor: '#ABABAB' }} />
                </View>

                <View style={styles.child}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#5D3EBD', flex: 1, margin: 4, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => {
                            this.setState({ scaleAnimationModal: true })
                        }}>
                        <Text style={{ color: 'white', fontSize: 19 }}>Reset Password</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.child, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                    <Ionicons name={'md-refresh'} size={36} color={'#6E7586'} />
                    <Text style={{ fontSize: 24, paddingHorizontal: 12, color: '#6E7586' }}>Resend Code</Text>
                </View>
                <View style={styles.child} />
                <View style={styles.child} />
                <View style={styles.child} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 12
    },
    child: {
        flex: 1,
        margin: 3
    }
})

export default ResetPasswordScreen