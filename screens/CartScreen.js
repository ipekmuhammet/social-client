import React from 'react'
import { FlatList, View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

import CardProduct from '../components/CardProduct'
import CompletePayment from '../components/CompletePayment'

const CartScreen = ({ cart, refreshCard, navigation }) => {
    const products = Object.values(cart)

    if (products.length > 0) {
        return (
            <View style={styles.container}>
                <FlatList
                    key={refreshCard}
                    data={products}
                    keyExtractor={item => 'cart' + item.Id}
                    renderItem={({ item }) => <CardProduct key={item.Id} data={item} />}
                    ListFooterComponent={
                        <View style={{ height: 90 }} />
                    }
                />
                <CompletePayment navigation={navigation} />
            </View>
        )
    } else {
        return (
            <View style={styles.emptyCartContainer}>
                <View style={styles.child} />
                <View style={styles.child} />
                <View style={styles.child} />
                <View style={styles.child}>
                    <Ionicons name={'md-basket'} size={96} color={'#BDBDBD'} />
                </View>
                <View style={styles.child} />
                <View style={styles.child}>
                    <Text style={{ fontSize: 18, textAlign: 'center' }}>Sepetinizde ürün bulunmamaktadır.</Text>
                </View>
                <View style={styles.child} />
                <View style={[styles.child, { display: 'flex' }]}>
                    <TouchableOpacity onPress={() => { navigation.navigate('products') }} style={{ backgroundColor: '#4CAB51', borderRadius: 32, alignItems: 'center', justifyContent: 'center', margin: 18, padding: 18, paddingHorizontal: 48 }}>
                        <Text style={{ color: 'white', fontSize: 20, alignItems: 'center', justifyContent: 'center' }}>ÜRÜNLERİ LİSTELE</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.child} />
                <View style={styles.child} />
                <View style={styles.child} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    emptyCartContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EDEDED' },
    child: { flex: 1, alignItems: 'center', justifyContent: 'center' }
})

const mapStateToProps = ({
    reducer1: {
        cart,
        refreshCard
    }
}) => ({
    cart,
    refreshCard
})

export default connect(mapStateToProps)(CartScreen)
