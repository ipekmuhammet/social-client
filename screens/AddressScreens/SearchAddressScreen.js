import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, FlatList, TouchableOpacity, Text, TextInput, Alert } from 'react-native'
import axios from 'axios'
import { RFValue } from 'react-native-responsive-fontsize'
import { Ionicons } from '@expo/vector-icons'

import { setRegionByPlace, setCurrentRegion } from '../../actions/map-actions'

class SearchAddressScreen extends React.PureComponent {

    state = {
        searchVal: '',
        locations: []
    }

    search = (text) => {
        this.setState({ searchVal: text })
        axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=istanbul ${text}&key=AIzaSyDOKcW0tFvi_T9vFyERfUDh20IxfTfBsmA&components=country:tr&origin=41.0381511,28.9418645`)
            .then(({ data }) => {
                this.setState({ locations: data.predictions })
            })
    }

    onAddressClick = (item) => {
        this.props.setRegionByPlace(item.place_id, (data) => {
            this.props.navigation.navigate('pinAddressScreen', {
                region: {
                    latitude: data.result.geometry.location.lat,
                    longitude: data.result.geometry.location.lng,
                }
            })
        })
    }

    //  shouldComponentUpdate(_, nextState) {
    //      //  if (this.state.locations[0]?.id !== nextState.locations[0]?.id)
    //      //      return true
    //      //  return false
    //  }

    render() {
        return (
            <View style={{ backgroundColor: '#E5E5E5', flex: 1 }}>
                <FlatList
                    style={{ flex: 1, backgroundColor: 'white' }}
                    data={this.state.locations}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => this.onAddressClick(item)}
                            style={{ height: 70, paddingVertical: RFValue(16, 600), display: 'flex', flexDirection: 'row', alignItems: 'center', margin: RFValue(6, 600) }}>
                            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: RFValue(10, 600), alignItems: 'center' }}>
                                <Ionicons size={32} name={'md-pin'} color={'#6B788B'} />
                                <Text numberOfLines={3} style={{ flex: 1, paddingHorizontal: RFValue(16, 600), fontSize: RFValue(16, 600), color: '#6B788B', fontWeight: '500' }}>{item.description}</Text>
                                <Text numberOfLines={3} style={{ paddingHorizontal: RFValue(4, 600), fontSize: RFValue(14, 600), color: '#6B788B', fontWeight: '500' }}>
                                    {item.distance_meters && (parseInt(item.distance_meters) > 1000 ? (parseInt(item.distance_meters) / 1000).toFixed(2) + 'km' : item.distance_meters + 'm')}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    ListHeaderComponent={() => (
                        <View style={{ height: 110, display: 'flex', backgroundColor: 'white' }}>

                            <View style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', marginHorizontal: RFValue(6, 600) }}>
                                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: RFValue(10, 600) }}>
                                    <Ionicons size={32} name={'md-search'} color={'#5E3FBE'} />
                                    <TextInput value={this.state.searchVal} onChangeText={this.search} placeholder={'Search Address'} style={{ flex: 1, paddingHorizontal: RFValue(16, 600), fontSize: 18 }} />
                                </View>
                            </View>

                            <TouchableOpacity
                                onPress={() => {
                                    this.props.setCurrentRegion((region, err) => {
                                        if (err) {
                                            Alert.alert('need permission') // TODO
                                        } else {
                                            this.props.navigation.navigate('pinAddressScreen', {
                                                region
                                            })
                                        }
                                    })
                                }}
                                style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', marginHorizontal: RFValue(6, 600) }}>
                                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: RFValue(10, 600), alignItems: 'center' }}>
                                    <Ionicons size={32} name={'md-locate'} color={'#5E3FBE'} />
                                    <Text style={{ flex: 1, paddingHorizontal: RFValue(16, 600), fontSize: 18 }}>Use current location</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    )}
                />
            </View>
        )
    }
}

const mapDispatchToProps = {
    setRegionByPlace,
    setCurrentRegion
}

export default connect(null, mapDispatchToProps)(SearchAddressScreen)