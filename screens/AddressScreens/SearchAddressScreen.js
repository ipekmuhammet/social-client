import React from 'react'
import { View, FlatList, TouchableOpacity, Text, TextInput } from 'react-native'
import axios from 'axios'
import { Ionicons } from '@expo/vector-icons'

class SearchAddressScreen extends React.PureComponent {

    state = {
        locations: []
    }

    movePinAddressScreen = (placeId) => {
        axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyDOKcW0tFvi_T9vFyERfUDh20IxfTfBsmA`)
            .then(({ data }) => {
                this.props.navigation.navigate('pinAddressScreen', { location: { latitude: data.result.geometry.location.lat, longitude: data.result.geometry.location.lng } })
            })
    }

    search = (text) => {
        axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=istanbul ${text}&key=AIzaSyDOKcW0tFvi_T9vFyERfUDh20IxfTfBsmA&components=country:tr&origin=41.0381511,28.9418645`)
            .then(({ data }) => {
                this.setState({ locations: data.predictions })
            })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 2, display: 'flex', backgroundColor: 'white' }}>

                    <View style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', marginHorizontal: 6 }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10 }}>
                            <Ionicons size={32} name={'md-search'} color={'#5E3FBE'} />
                            <TextInput onChangeText={this.search} placeholder={'Search Address'} style={{ flex: 1, paddingHorizontal: 16, fontSize: 18 }} />
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('pinAddressScreen', {
                                location: {
                                    latitude: 41.0381665,
                                    longitude: 28.9417276
                                }
                            })
                        }}
                        style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', marginHorizontal: 6 }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10, alignItems: 'center' }}>
                            <Ionicons size={32} name={'md-locate'} color={'#5E3FBE'} />
                            <Text style={{ flex: 1, paddingHorizontal: 16, fontSize: 18 }}>Use current location</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 6, backgroundColor: '#E5E5E5' }}>
                    {
                        this.state.locations.length > 0 && <FlatList
                            style={{ flex: 1, backgroundColor: 'white' }}
                            data={this.state.locations}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => { this.movePinAddressScreen(item.place_id) }}
                                    style={{ height: 70, paddingVertical: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 6 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10, alignItems: 'center' }}>
                                        <Ionicons size={32} name={'md-pin'} color={'#6B788B'} />
                                        <Text numberOfLines={3} style={{ flex: 1, paddingHorizontal: 16, fontSize: 16, color: '#6B788B', fontWeight: '500' }}>{item.description}</Text>
                                        <Text numberOfLines={3} style={{ paddingHorizontal: 4, fontSize: 14, color: '#6B788B', fontWeight: '500' }}>
                                            {item.distance_meters && (parseInt(item.distance_meters) > 1000 ? (parseInt(item.distance_meters) / 1000).toFixed(2) + 'km' : item.distance_meters + 'm')}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )} />
                    }
                </View>
            </View>
        )
    }
}

export default SearchAddressScreen