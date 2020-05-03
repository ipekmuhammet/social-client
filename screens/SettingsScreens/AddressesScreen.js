import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import ClickableSettingItem from '../../components/ClickableSettingItem'
import HeadingDivider from '../../components/HeadingDivider'
import AddressList from '../../components/AddressList'

class AddressesScreen extends React.PureComponent {
    moveToSearchAddress = () => {
      this.props.navigation.navigate('searchAddressScreen')
    }

    renderFooter = () => (
      <>
        <HeadingDivider title="Adres ekle" />

        <ClickableSettingItem title="Yeni adres" onClick={this.moveToSearchAddress}>
          <Ionicons color="#4522A0" name="md-locate" size={32} />
          <Ionicons color="#4522A0" name="md-add" size={32} />
        </ClickableSettingItem>

        {
                //  <ClickableSettingItem title={'Add home address'} onClick={() => {
                //      navigation.navigate('searchAddressScreen')
                //  }}>
                //      <Ionicons color={'#4522A0'} name={'md-home'} size={32} />
                //      <Ionicons color={'#4522A0'} name={'md-add'} size={32} />
                //  </ClickableSettingItem>
                //
                //  <ClickableSettingItem title={'Add work address'} onClick={() => { console.log('Add work address') }}>
                //      <Ionicons color={'#4522A0'} name={'md-business'} size={32} />
                //      <Ionicons color={'#4522A0'} name={'md-add'} size={32} />
                //  </ClickableSettingItem>
                //
                //  <ClickableSettingItem title={'Add other address'} onClick={() => { console.log('Add other address') }}>
                //      <Ionicons color={'#4522A0'} name={'md-locate'} size={32} />
                //      <Ionicons color={'#4522A0'} name={'md-add'} size={32} />
                //  </ClickableSettingItem>
            }
      </>
    )

    render() {
      return (
        <View style={styles.container}>
          <AddressList stackNavigation={this.props.navigation} navigation={this.props.route.params.navigation} footer={this.renderFooter} />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDEDED',
  },
})


export default AddressesScreen
