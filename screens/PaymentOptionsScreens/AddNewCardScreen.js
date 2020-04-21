import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import joi from 'react-native-joi'

import { saveCard } from '../../actions/actions2'

import TermsComponent from '../../components/TermsComponent'
import ButtonComponent from '../../components/ButtonComponent'
import InputComponent from '../../components/InputComponent'

class AddNewCardScreen extends React.PureComponent {

    state = {
        cardAlias: '',
        cardHolderName: this.props.user.name_surname,// Kullanıcı'nın kayıt ismi // TODO
        cardNumber: '',
        expireYear: '',
        expireMonth: '',
        CVC2: ''
    }

    onAliasChange = (cardAlias) => {
        this.setState({ cardAlias })
    }

    onContinueClick = () => {
        this.props.saveCard(this.state, () => {
            this.props.navigation.goBack()
        })
    }

    onCardNumberChange = (cardNumber) => {
        this.setState({ cardNumber })
    }

    onCvcChange = (CVC2) => {
        this.setState({ CVC2 })
    }

    onExpireMonthChange = (expireMonth) => {
        this.setState({ expireMonth })
    }

    onExpireYearChange = (expireYear) => {
        this.setState({ expireYear })
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

                <InputComponent
                    options={{
                        placeholder: 'Card Label (Personal etc.)'
                    }}
                    onChange={this.onAliasChange}
                    value={this.state.cardAlias} />

                <InputComponent
                    options={{
                        placeholder: 'Card No',
                        keyboardType: 'number-pad'
                    }}
                    onChange={this.onCardNumberChange}
                    value={this.state.cardNumber} />

                <View style={styles.row}>

                    <View style={styles.inputContainer}>
                        <InputComponent
                            options={{
                                placeholder: 'CVC2',
                                keyboardType: 'number-pad'
                            }}
                            onChange={this.onCvcChange}
                            value={this.state.CVC2} />
                    </View>

                    <View style={styles.inputContainer}>
                        <InputComponent
                            options={{
                                placeholder: 'Month',
                                keyboardType: 'number-pad'
                            }}
                            onChange={this.onExpireMonthChange}
                            value={this.state.expireMonth} />
                    </View>

                    <View style={styles.inputContainer}>
                        <InputComponent
                            options={{
                                placeholder: 'Year',
                                keyboardType: 'number-pad'
                            }}
                            onChange={this.onExpireYearChange}
                            value={this.state.expireYear} />
                    </View>

                </View>

                <TermsComponent />

                <View style={styles.buttonDivider} />

                <ButtonComponent text={'Continue'} onClick={this.onContinueClick} />

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
    row: { flexDirection: 'row' },
    inputContainer: { flex: 1 },
    continueButton: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(94,63,190)', borderRadius: 10 },
    continueText: { fontSize: RFValue(20, 600), color: 'white' },
    empty: { height: RFValue(22, 600) },
    buttonDivider: { height: RFValue(20, 600), backgroundColor: '#EDEEF0' }
})

const mapStateToProps = ({
    reducer4: {
        user
    }
}) => ({
    user
})

const mapDispatchToProps = {
    saveCard
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCardScreen)