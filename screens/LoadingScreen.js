import React from 'react'
import { connect } from 'react-redux'
import { View, Image, Text, AsyncStorage } from 'react-native'

import { setInitialDatas } from '../actions/actions4'

class LoadingScreen extends React.PureComponent {

	UNSAFE_componentWillMount() {
		if (this.props.token) {
			if (this.props.categories.length > 0) {
				this.props.navigation.navigate('Root')
			} else {
				this.props.setInitialDatas()
			}
		} else {
			this.props.navigation.navigate('Welcome')
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.token) {
			if (this.props.categories.length > 0) {
				this.props.navigation.navigate('Root')
			} else {
				// if (this.props.token !== nextProps.token) {
				// console.warn('Initial datas problem')
				this.props.setInitialDatas()
				// }
			}
		} else {
			this.props.navigation.navigate('Welcome')
		}
	}

	render() {
		return (
			<View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', display: 'flex', flex: 1 }}>
				<View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
					<Image source={require('../assets/loading.gif')} />
					<Text style={{ fontSize: 24, paddingVertical: 30, fontWeight: '700', color: '#5D3EBD' }}>Lütfen bekleyin.</Text>
				</View>
			</View>
		)
	}
}

const mapStateToProps = ({
	reducer4: {
		token,
		categories,
		products
	}
}) => ({
	token,
	categories,
	products
})

const mapDispatchToProps = {
	setInitialDatas
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen)