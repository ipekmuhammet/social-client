import React from 'react'
import { connect } from 'react-redux'

import { setInitialDatas } from '../actions/actions4'
import LoadingComponent from '../components/LoadingCompenent'

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
		return <LoadingComponent />
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