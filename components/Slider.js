import React from 'react'
import Slideshow from 'react-native-image-slider-show'

class Slider extends React.PureComponent {

    state = {
        position: 0,
        interval: null,
        dataSource: [
            {
                url: 'https://www.herkesebilimteknoloji.com/wp-content/uploads/2019/04/ata-1600x1000.jpg'
            },
            {
                url: 'https://i2.milimaj.com/i/milliyet/75/0x0/5dc7360d5542871e38fdc526.jpg'
            },
            {
                url: 'https://i.sozcu.com.tr/wp-content/uploads/2019/11/09/iecrop/images-2_16_9_1573296641.jpg'
            },
            {
                url: 'https://i4.hurimg.com/i/hurriyet/75/0x0/5dc69e46d3806c14c4d56d73.jpg'
            }
        ]
    }

    UNSAFE_componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
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
            <Slideshow
                dataSource={this.state.dataSource}
                position={this.state.position}
                arrowLeft={<></>}
                arrowRight={<></>}
                onPositionChanged={this.onPositionChanged} />
        )
    }
}

export default Slider