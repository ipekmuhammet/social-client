import React from 'react'
import { connect } from 'react-redux'
import { View, FlatList, StyleSheet } from 'react-native'

import DeleteCardPopup from '../../components/popups/DeleteCardPopup'
import CardComponent from '../../components/CardComponent'
import AddNewCardComponent from '../../components/AddNewCardComponent'
import { deleteCard } from '../../actions/actions2'

class PaymentOptionsScreen extends React.Component {
    state = {
        scaleAnimationModal: false,
        selectedCard: null
    }

    setPopupState = (state, confirm) => {
        this.setState(state)

        if (confirm) {
            this.props.deleteCard(this.state.selectedCard, this.props.token)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <DeleteCardPopup scaleAnimationModal={this.state.scaleAnimationModal} setPopupState={this.setPopupState} />
                <FlatList
                    contentContainerStyle={{ backgroundColor: 'white' }}
                    data={this.props.cards}
                    keyExtractor={item => item.number}
                    renderItem={({ item }) => (
                        <CardComponent item={item} setPopupState={this.setPopupState} navigation={this.props.navigation}/>
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

const mapStateToProps = ({
    reducer2: {
        cards
    },
    reducer4: {
        token
    }
}) => ({
    cards,
    token
})

const mapDispacthToProps = {
    deleteCard
}

export default connect(mapStateToProps, mapDispacthToProps)(PaymentOptionsScreen)