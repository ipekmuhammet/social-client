import React from 'react'
import { View } from 'react-native'
import Slideshow from 'react-native-image-slider-show'
import { SERVER_URL } from '../utils/global'

class Slider extends React.PureComponent {
	state = {
		position: 0,
		interval: null,
		dataSource: [
			{
				url: `${SERVER_URL}/assets/banners/1.jpg`
			},
			{
				url: `${SERVER_URL}/assets/banners/2.jpg`
			},
			{
				url: `${SERVER_URL}/assets/banners/3.jpg`
			},
			{
				url: `${SERVER_URL}/assets/banners/4.jpg`
			}
		]
	}

	// eslint-disable-next-line camelcase
	UNSAFE_componentWillMount() {
		this.setState({
			interval: setInterval(() => {
				this.setState({
					// eslint-disable-next-line react/no-access-state-in-setstate
					position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
				})
			}, 5000)
		})
	}

	componentWillUnmount() {
		clearInterval(this.state.interval)
	}

	onPositionChanged = (position) => {
		this.setState({ position })
	}

	render() {
		return (
			<View pointerEvents="none">
				<Slideshow
					dataSource={this.state.dataSource}
					position={this.state.position}
					arrowLeft={<></>}
					arrowRight={<></>}
					onPositionChanged={this.onPositionChanged}
				/>
			</View>
		)
	}
}

export default Slider
