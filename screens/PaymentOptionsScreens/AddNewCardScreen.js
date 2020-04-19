import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Image, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { saveCard } from '../../actions/actions2'

import TermsComponent from '../../components/TermsComponent'
import ButtonComponent from '../../components/ButtonComponent'

class AddNewCardScreen extends React.PureComponent {

    state = {
        cardAlias: 'Muhammet\'s Card',
        cardHolderName: 'Muhammet Ipek',// Kullanıcı'nın kayıt ismi // TODO
        cardNumber: '4444 4444 4444 4444',
        expireYear: '23',
        expireMonth: '09',
        CVC2: '333'
    }

    render() {
        return (
            <ScrollView>

                <View style={styles.header}>

                    <View style={styles.imageContainer}>
                        <Image style={styles.caseImage} source={require('../../assets/case.png')} />
                    </View>

                    <View style={styles.infoContainer}>
                        <View>
                            <Text style={styles.securityText}>Security</Text>
                        </View>
                        <View>
                            <Text style={styles.securityInformation}>
                                Our payment insfrastructure is provided by MasterPass and the transaction security is guaranteed by MasterCard.
                            </Text>
                        </View>
                    </View>

                </View>

                <View style={styles.inputContainer}>
                    <TextInput value={this.state.cardAlias} onChangeText={(cardAlias) => { this.setState({ cardAlias }) }} placeholder={'Card Label (Personal etc.)'} style={styles.input} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput value={this.state.cardNumber} onChangeText={(cardNumber) => { this.setState({ cardNumber }) }} placeholder={'Card No'} style={styles.input} />
                </View>

                <View style={[styles.inputContainer, { flexDirection: 'row' }]}>

                    <TextInput
                        value={this.state.CVC2}
                        onChangeText={(CVC2) => { this.setState({ CVC2 }) }}
                        placeholder={'CVC2'}
                        style={[styles.input, { flex: 1, marginRight: 4 }]} />

                    <TextInput
                        value={this.state.expireMonth}
                        onChangeText={(expireMonth) => { this.setState({ expireMonth }) }}
                        placeholder={'Month'}
                        style={[styles.input, { flex: 1, marginRight: 4 }]} />

                    <TextInput
                        value={this.state.expireYear}
                        onChangeText={(expireYear) => { this.setState({ expireYear }) }}
                        placeholder={'Year'}
                        style={[styles.input, { flex: 1, marginLeft: 4 }]} />

                </View>

                <TermsComponent />

                <View style={styles.buttonDivider} />

                <ButtonComponent text={'Continue'} onClick={() => {
                    this.props.saveCard(this.state, () => {
                        this.props.navigation.goBack()
                    })
                }} />

            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    header: { flexDirection: 'row' },
    imageContainer: { margin: RFValue(10, 600), marginLeft: RFValue(12, 600) },
    caseImage: { width: RFValue(95, 600), height: RFValue(105, 600), borderRadius: 8 },
    securityText: { color: '#5E3FBE', fontSize: RFValue(19, 600), fontWeight: 'bold' },
    infoContainer: { flex: 1, flexDirection: 'column', margin: RFValue(10, 600), marginRight: RFValue(12, 600) },
    securityInformation: { color: '#757889', fontSize: RFValue(15, 600), fontWeight: 'bold' },
    inputContainer: { marginVertical: 2 },
    input: { borderWidth: .8, borderColor: '#CDCDCD', fontSize: RFValue(19, 600), paddingHorizontal: RFValue(16, 600), paddingVertical: RFValue(12, 600), margin: RFValue(10, 600), marginVertical: 4, borderRadius: 8 },
    continueButton: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(94,63,190)', borderRadius: 10 },
    continueText: { fontSize: RFValue(20, 600), color: 'white' },
    empty: { height: RFValue(22, 600) },
    buttonDivider: { height: RFValue(20, 600), backgroundColor: '#EDEEF0' }
})

const mapDispatchToProps = {
    saveCard
}

export default connect(null, mapDispatchToProps)(AddNewCardScreen)