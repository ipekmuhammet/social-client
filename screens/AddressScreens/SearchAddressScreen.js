import React from 'react'
import { View, TouchableOpacity, Text, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

class SearchAddressScreen extends React.PureComponent {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 2, display: 'flex' }}>

                    <View style={{ flex: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', marginHorizontal: 6 }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10 }}>
                            <Ionicons size={40} name={'md-search'} color={'#5E3FBE'} />
                            <TextInput placeholder={'Search Address'} style={{ flex: 1, paddingHorizontal: 16, fontSize: 20 }} />
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('pinAddressScreen') }}
                        style={{ flex: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', marginHorizontal: 6 }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10, alignItems: 'center' }}>
                            <Ionicons size={40} name={'md-pin'} color={'#5E3FBE'} />
                            <Text style={{ flex: 1, paddingHorizontal: 16, fontSize: 20 }}>Use current location</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 6, backgroundColor: '#E5E5E5' }}></View>
            </View>
        )
    }
}

export default SearchAddressScreen