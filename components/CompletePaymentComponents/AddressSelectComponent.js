import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

const AddressSelectComponent = ({ navigation }) => (
    <TouchableOpacity style={styles.container} onPress={() => {
        navigation.navigate('addresses')
    }}>
        <View style={styles.iconContainer}>
            <Ionicons size={32} name={'md-home'} />
        </View>
        <View style={styles.paymentInfoContainer}>
            <View style={styles.paymentInfoTextContainer}>
                <Text style={styles.paymentTitle}>{'Ev'}</Text>
            </View>
            <View style={styles.paymentInfoTextContainer}>
                <Text style={styles.paymentDetail}>{'Fatih (Ayvansaray Mah.)'}</Text>
            </View>
        </View>
        <View style={styles.iconContainer}>
            <MaterialIcons color={'#ACACAC'} size={32} name={'chevron-right'} />
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
        padding: 4,
        flex: 1
    },
    paymentInfoContainer: {
        flexDirection: 'column',
        marginHorizontal: 8,
        padding: 4,
        height: 60,
        flex: 5
    },
    paymentInfoTextContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    paymentTitle: {
        fontSize: 18,
        marginVertical: 4
    },
    paymentDetail: {
        fontSize: 15,
        marginVertical: 4
    }
})


export default AddressSelectComponent