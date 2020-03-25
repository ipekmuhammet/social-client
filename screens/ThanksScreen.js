import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const ThanksScreen = ({ navigation }) => (
    <View style={styles.emptyCartContainer}>
        <View style={styles.child} />
        <View style={styles.child} />
        <View style={styles.child} />
        <View style={styles.child}>
            <Ionicons name={'md-basket'} size={96} color={'#BDBDBD'} />
        </View>
        <View style={styles.child} />
        <View style={styles.child}>
            <Text style={{ fontSize: 24, textAlign: 'center' }}>Siparişiniz alınmıştır.</Text>
        </View>
        <View style={styles.child} />
        <View style={[styles.child, { display: 'flex' }]}>
            <TouchableOpacity
                onPress={() => {
                    navigation.popToTop()
                    navigation.navigate('home')
                }}
                style={{ backgroundColor: '#4CAB51', borderRadius: 32, alignItems: 'center', justifyContent: 'center', margin: 18, padding: 18, paddingHorizontal: 48 }}>

                <Text style={{ color: 'white', fontSize: 20, alignItems: 'center', justifyContent: 'center' }}>ANASAYFAYA GİT</Text>
                
            </TouchableOpacity>
        </View>
        <View style={styles.child} />
        <View style={styles.child} />
        <View style={styles.child} />
    </View>
)

const styles = StyleSheet.create({
    emptyCartContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EDEDED' },
    child: { flex: 1, alignItems: 'center', justifyContent: 'center' }
})

export default ThanksScreen