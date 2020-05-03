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
      selectedCard: null,
    }

    renderCardComponent = ({ item }) => (
      <CardComponent
        item={item}
        setPopupState={this.setPopupState}
        stackNavigation={this.props.navigation}
        navigation={this.props.route.params.navigation}
      />
    )

    setPopupState = (result, confirm) => {
      this.setState({
        scaleAnimationModal: result.scaleAnimationModal,
        selectedCard: result.selectedCard,
      })

      if (confirm) {
        this.props.deleteCard(this.state.selectedCard)
      }
    }

    renderListFooter = () => <AddNewCardComponent navigation={this.props.navigation} />

    render() {
      return (
        <View style={styles.container}>

          <DeleteCardPopup scaleAnimationModal={this.state.scaleAnimationModal} setPopupState={this.setPopupState} />

          <FlatList
            contentContainerStyle={styles.list}
            data={this.props.cards}
            keyExtractor={(item) => item.cardToken}
            renderItem={this.renderCardComponent}
            ListFooterComponent={this.renderListFooter}
          />

        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  list: { backgroundColor: 'white' },
})

const mapStateToProps = ({
  reducer2: {
    cards,
  },
}) => ({
  cards,
})

const mapDispacthToProps = {
  deleteCard,
}

export default connect(mapStateToProps, mapDispacthToProps)(PaymentOptionsScreen)
