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

                <View
                    style={{
                        position: 'absolute', top: 0, height: 68, left: 0, right: 0, backgroundColor: 'white', zIndex: 2, display: 'flex',
                        flexDirection: 'row', alignItems: 'center', borderRadius: 16, margin: 18, marginHorizontal: 24, paddingHorizontal: 12
                    }}>
                    <Ionicons name={'md-pin'} size={40} color={'#5D3EBD'} />
                    <TextInput style={{ margin: 8, marginHorizontal: 4, flex: 1, fontSize: 22, padding: 8, paddingHorizontal: 8, color: '#757B8B' }} value={this.state.address} />
                </View>

                <MapView
                    style={{ flex: 1 }}
                    initialRegion={this.state.region}
                    onRegionChange={this.onRegionChange}>
                    <MapView.Marker coordinate={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude }} />
                </MapView>

                <View
                    style={{
                        position: 'absolute', bottom: 0, height: 78, left: 0, right: 0, backgroundColor: 'white', zIndex: 2, display: 'flex',
                        flexDirection: 'row', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 24
                    }}>

                    <TouchableOpacity 
                    style={{ flex: 1, fontSize: 22, padding: 16, backgroundColor: '#5D3EBD', borderRadius: 16 }} 
                    onPress={()=>{this.props.navigation.navigate('completeAddressScreen',{address:this.state.address,region:this.state.region})}}>
                        <Text style={{ fontSize: 24, color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Use This Address</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default PinAddressScreen