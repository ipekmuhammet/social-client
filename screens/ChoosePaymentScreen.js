import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class ChoosePaymentScreen extends Component {
    render() {
        return (
            <View>
                <Text> choose payment </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoosePaymentScreen)
