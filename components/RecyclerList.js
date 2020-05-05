import React from 'react'
import { Dimensions } from 'react-native'
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview'

import Product from './Product'
import EmptyProduct from './EmptyProduct'
import SearchFilter from './SearchFilter'

class List extends React.PureComponent {
	constructor(args) {
		super(args)

		const { width } = Dimensions.get('window')

		const dataProvider = new DataProvider((r1, r2) => r1 !== r2)

		this.layoutProvider = new LayoutProvider(() => 0, (type, dim) => {
			// eslint-disable-next-line no-param-reassign
			dim.width = width / 3.05
			// eslint-disable-next-line no-param-reassign
			dim.height = 236
		})

		this.state = {
			dataProvider: dataProvider.cloneWithRows(this.props.list),
		}
	}

	rowRenderer = (type, item) => (item.empty ? <EmptyProduct /> : <Product key={item._id} data={item} navigation={this.props.navigation} />)

	setRef = (ref) => {
		this.setState({ ref })
	}

	render() {
		return (
			<>
				{
					false && !this.props.fromSearch && <SearchFilter listRef={this.state.ref} />
				}
				<RecyclerListView
					style={{ backgroundColor: 'white' }}
					ref={this.setRef}
					layoutProvider={this.layoutProvider}
					dataProvider={this.state.dataProvider}
					rowRenderer={this.rowRenderer}
				/>
			</>
		)
	}
}

export default List
