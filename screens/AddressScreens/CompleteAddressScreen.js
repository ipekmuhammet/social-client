import React from 'react'
import { View, TouchableOpacity, Text, TextInput } from 'react-native'
import MapView from 'react-native-maps'
import axios from 'axios'
import { Ionicons } from '@expo/vector-icons'

class PinAddressScreen extends React.PureComponent {

    state = {
        region: {
            latitude: 41.0381665,
            longitude: 28.9417276,
            latitudeDelta: 0.0035,
            longitudeDelta: 0.0035,
        },
        address: ''
    }

    getAddress = (region) => (
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${region.latitude},${region.longitude}&key=AIzaSyDOKcW0tFvi_T9vFyERfUDh20IxfTfBsmA`)
            .then(({ data }) => data.results[0].formatted_address)
    )


    onRegionChange = (region) => {
        this.setState({ region })
        this.getAddress(region).then((address) => {
            this.setState({ address })
        })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <View style={{flex:1.4}}/>
                <View style={{flex:3,backgroundColor:'pink'}}>
                    <View style={{flex:1,margin:2,flexDirection:'row'}}>
                        <View style={{flex:1,margin:2}}>
                        </View>
                        <View style={{flex:2,margin:2}}>
                        </View>
                    </View>
                    <View style={{flex:1,margin:2}}>
                    </View>
                    <View style={{flex:1,margin:2,flexDirection:'row'}}>
                        <View style={{flex:1,margin:2}}>
                        <TextInput placeholder={'Building No'} style={{flex:1,borderWidth:1,alignItems:'center',justifyContent:'center',margin:6,borderRadius:12,paddingHorizontal:16,fontSize:22}}/>
                        </View>
                        <View style={{flex:1,margin:2}}>
                        <TextInput placeholder={'Floor'} style={{flex:1,borderWidth:1,alignItems:'center',justifyContent:'center',margin:6,borderRadius:12,paddingHorizontal:16,fontSize:22}}/>
                        </View>
                        <View style={{flex:1,margin:2}}>
                        <TextInput placeholder={'Apt No'} style={{flex:1,borderWidth:1,alignItems:'center',justifyContent:'center',margin:6,borderRadius:12,paddingHorizontal:16,fontSize:22}}/>
                        </View>
                    </View>
                    <View style={{flex:1,margin:2}}>
                    <TextInput placeholder={'Directions'} style={{flex:1,borderWidth:1,alignItems:'center',justifyContent:'center',margin:6,borderRadius:12,paddingHorizontal:16,fontSize:22}}/>
                    </View>
                    <View style={{flex:1,margin:2}}>
                        <TouchableOpacity style={{flex:1,backgroundColor:'#5D3EBD',alignItems:'center',justifyContent:'center',margin:6,borderRadius:12}}>
                            <Text style={{fontSize:22,color:'white'}}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default PinAddressScreen