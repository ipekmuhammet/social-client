import axios from 'axios'

export const SET_REGION = 'SET_REGION', SET_ADDRESS = 'SET_ADDRESS', SET_REGION_BY_PLACE = 'SET_REGION_BY_PLACE', SET_CURRENT_REGION = 'SET_CURRENT_REGION'

const getAddress = (region) => (
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${region.latitude},${region.longitude}&key=AIzaSyDOKcW0tFvi_T9vFyERfUDh20IxfTfBsmA`)
        .then(({ data }) => data.results[0].formatted_address)
)

export const setRegion = (region) => ((dispatch) => {
    getAddress(region).then(address => {
        dispatch({
            type: SET_REGION,
            payload: {
                region,
                address
            }
        })
    })
})

export const setAddress = (address) => ((dispatch) => {
    dispatch({
        type: SET_ADDRESS,
        payload: {
            address
        }
    })
})

export const setRegionByPlace = (placeId, navigation) => ((dispatch) => {
    axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyDOKcW0tFvi_T9vFyERfUDh20IxfTfBsmA`)
        .then(({ data }) => {
            dispatch({
                type: SET_REGION_BY_PLACE,
                payload: {
                    region: {
                        latitude: data.result.geometry.location.lat,
                        longitude: data.result.geometry.location.lng
                    }
                }
            })

            navigation.navigate('pinAddressScreen', {
                region: {
                    latitude: data.result.geometry.location.lat,
                    longitude: data.result.geometry.location.lng,
                }
            })
        })
})

export const setCurrentRegion = (navigation) => ((dispatch) => {

    dispatch({
        type: SET_CURRENT_REGION,
        payload: {
            region: {
                latitude: 41.0381665,
                longitude: 28.9417276
            }
        }
    })

    navigation.navigate('pinAddressScreen', {
        region: {
            latitude: 41.0381665,
            longitude: 28.9417276
        }
    })
})