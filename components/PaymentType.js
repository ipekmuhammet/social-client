import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const PaymentType = ({ title, detail, icon }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Ionicons size={40} name={icon} />
            </View>
            <View style={styles.paymentInfoContainer}>
                <View style={styles.paymentInfoTextContainer}>
                    <Text style={styles.paymentTitle}>{title}</Text>
                </View>
                <View style={styles.paymentInfoTextContainer}>
                    <Text style={styles.paymentDetail}>{detail}</Text>
                </View>
            </View>
        </View>
    )
}

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
        height: 72,
        flex: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#C3C3C3'
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

export default PaymentType