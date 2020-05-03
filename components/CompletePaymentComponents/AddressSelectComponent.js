import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  View, TouchableOpacity, Text, StyleSheet,
} from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

const AddressSelectComponent = ({
  navigation, title, subTitle, token, setNeedToLoginPopupState,
}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => {
      if (!token) {
        setNeedToLoginPopupState(true)
      } else {
        navigation.navigate('addresses')
      }
    }}
  >
    <View style={styles.iconContainer}>
      <Ionicons size={32} name="md-home" />
    </View>
    <View style={styles.paymentInfoContainer}>
      <View style={styles.paymentInfoTextContainer}>
        <Text numberOfLines={1} style={styles.paymentTitle}>{title}</Text>
      </View>
      <View style={styles.paymentInfoTextContainer}>
        <Text numberOfLines={2} style={styles.paymentDetail}>{subTitle}</Text>
      </View>
    </View>
    <View style={styles.iconContainer}>
      <MaterialIcons color="#ACACAC" size={32} name="chevron-right" />
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: RFValue(8, 600),
    padding: RFValue(4, 600),
    flex: 1,
  },
  paymentInfoContainer: {
    flexDirection: 'column',
    marginHorizontal: RFValue(8, 600),
    padding: RFValue(4, 600),
    height: RFValue(72, 600),
    flex: 5,
  },
  paymentInfoTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  paymentTitle: {
    fontSize: RFValue(17, 600),
    marginVertical: RFValue(4, 600),
  },
  paymentDetail: {
    fontSize: RFValue(14, 600),
    marginVertical: RFValue(4, 600),
  },
})


export default AddressSelectComponent
