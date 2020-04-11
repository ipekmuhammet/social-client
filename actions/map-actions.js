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

export const setRegionByPlace = (placeId, cb) => ((dispatch) => {
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
            cb(data)
        })
})

export const setCurrentRegion = (cb) => ((dispatch) => {

    const region = { // TODO
        latitude: 41.0381665,
        longitude: 28.9417276
    }

    dispatch({
        type: SET_CURRENT_REGION,
        payload: {
            region
        }
    })
    
    cb(region)
})