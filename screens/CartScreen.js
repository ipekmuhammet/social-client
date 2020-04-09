import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { FlatList, View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

import CardProduct from '../components/CardProduct'
import CompletePayment from '../components/CompletePayment'

const renderCardProductItem = ({ item }) => <CardProduct data={item} />

const CartScreen = ({ cart, navigation }) => {
    const products = Object.values(cart)

    if (products.length > 0) {
        return (
            <View style={styles.container}>
                <FlatList
                    data={products}
                    keyExtractor={item => 'cart' + item.id}
                    renderItem={renderCardProductItem}
                    ListFooterComponent={
                        <View style={styles.footer} />
                    } />
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
                    <Text style={styles.emptyCartText}>Sepetinizde ürün bulunmamaktadır.</Text>
                </View>
                <View style={styles.child} />
                <View style={[styles.child, styles.listProductsButtonContainer]}>
                    <TouchableOpacity onPress={() => { navigation.navigate('products') }} style={styles.listProducts}>
                        <Text style={styles.listProductsText}>ÜRÜNLERİ LİSTELE</Text>
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
    container: { flex: 1, backgroundColor: '#F5F5F5' },
    emptyCartContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EDEDED' },
    child: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    emptyCartText: { fontSize: RFValue(18, 600), textAlign: 'center' },
    listProductsButtonContainer: { display: 'flex' },
    listProducts: {
        backgroundColor: '#4CAB51', borderRadius: RFValue(32, 600), alignItems: 'center', justifyContent: 'center',
        margin: RFValue(18, 600), padding: RFValue(18, 600),
        paddingHorizontal: RFValue(48, 600)
    },
    listProductsText: { color: 'white', fontSize: RFValue(20, 600), alignItems: 'center', justifyContent: 'center' },
    footer: { height: RFValue(90, 600) }
})

const mapStateToProps = ({
    reducer1: {
        cart
    }
}) => ({
    cart
})

export default connect(mapStateToProps)(CartScreen)
