import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class Screen1 extends Component {
    render() {
        console.log(this.props)
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Screen 1</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Screen1)
