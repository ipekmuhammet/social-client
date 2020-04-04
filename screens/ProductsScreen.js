import React from 'react'
import { InteractionManager } from 'react-native'
import { connect } from 'react-redux'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'

import ProductList from '../components/ProductList'
import LoadingComponent from '../components/LoadingCompenent'

class ProductsScreen extends React.PureComponent {

	state = {
		fetch: false
	}

	componentDidMount() {
		InteractionManager.runAfterInteractions(() => {
			this.setState({ fetch: true })
		})
	}

	render() {
		return (
			!this.state.fetch ? <LoadingComponent /> :
				(
					<ScrollableTabView
						initialPage={this.props.selectedCategory}
						tabBarBackgroundColor={'#7849F7'}
						tabBarTextStyle={{ color: 'white', fontSize: 16 }}
						tabBarUnderlineStyle={{ backgroundColor: '#FED110' }}
						scrollWithoutAnimation={true}
						prerenderingSiblingsNumber={this.props.categories.length}
						renderTabBar={() => <ScrollableTabBar />}>
						{
							this.props.categories.map(category => <ProductList key={category.id} tabLabel={category.name} products={this.props.products[category.id]} />)
						}
					</ScrollableTabView>
				)
		)
	}
}

const mapStateToProps = ({
	reducer3: {
		selectedCategory
	},
	reducer4: {
		categories,
		products
	}
}) => ({
	selectedCategory,
	categories,
	products
})

export default connect(mapStateToProps)(ProductsScreen)