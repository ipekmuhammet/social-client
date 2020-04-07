import React from 'react'
import { connect } from 'react-redux'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'

import { decreaseProductCount, increaseProductCount } from '../actions/actions1'

const CardProductQuantityComponent = ({ id, cart, decreaseProductCount, increaseProductCount }) => (
    <React.Fragment>
        <TouchableOpacity onPress={() => { decreaseProductCount(id) }} style={[styles.child, styles.decreaseButton]}>
            <Text style={styles.quantityButton}>{'-'}</Text>
        </TouchableOpacity>

        <View style={[styles.child, styles.quantityContainer]}>
            <Text style={styles.quantityText}>{cart[id].count}</Text>
        </View>

        <TouchableOpacity onPress={() => { increaseProductCount(id) }} style={[styles.child, styles.increaseButton]}>
            <Text style={styles.quantityButton}>{'+'}</Text>
        </TouchableOpacity>
    </React.Fragment>
)

const styles = StyleSheet.create({
    child: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    quantityContainer: { backgroundColor: '#5D3EBD', padding: 4 },
    quantityButton: { color: '#5D3EBD', fontSize: 18 },
    quantityText: { color: 'white', fontSize: 18 },
    decreaseButton: { padding: 4, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 },
    increaseButton: { padding: 4, borderTopRightRadius: 10, borderBottomRightRadius: 10 }
})

const mapStateToProps = ({
    reducer1: {
        cart
    }
}) => ({
    cart
})

const mapDispatchToProps = {
    decreaseProductCount,
    increaseProductCount
}

export default connect(mapStateToProps, mapDispatchToProps)(CardProductQuantityComponent)