import React from 'react'
import { connect } from 'react-redux'
import { View, FlatList, StyleSheet } from 'react-native'

import DeleteCardPopup from '../../components/popups/DeleteCardPopup'
import CardComponent from '../../components/CardComponent'
import AddNewCardComponent from '../../components/AddNewCardComponent'

class PaymentOptionsScreen extends React.Component {

    state = {
        scaleAnimationModal: false,
        selectedCard: null
    }

    setPopupState = (state, confirm) => {
        this.setState(state)

        if (confirm) {
            console.log('delete ' + this.state.selectedCard)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <DeleteCardPopup scaleAnimationModal={this.state.scaleAnimationModal} setPopupState={this.setPopupState} />
                <FlatList
                    contentContainerStyle={{ backgroundColor: 'white' }}
                    data={[
                        { id: 0, type: 'visa', name: 'Visa Card', number: '4766620000000001', type: 'visa' },
                        { id: 0, type: 'mastercard', name: 'Master Card', number: '5504720000000003', type: 'mastercard' }
                    ]}
                    keyExtractor={item => item.number}
                    renderItem={({ item }) => (
                        <CardComponent item={item} setPopupState={this.setPopupState} />
                    )}
                    ListFooterComponent={() => <AddNewCardComponent navigation={this.props.navigation} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F5F5F5' }
})
export default connect()(PaymentOptionsScreen)