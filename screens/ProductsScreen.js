import React from 'react'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import { connect } from 'react-redux'

import ProductList from '../components/ProductList'

const ProductsScreen = ({ selectedCategory, categories, products }) => (
	<ScrollableTabView
		initialPage={selectedCategory}
		tabBarBackgroundColor={'#7849F7'}
		tabBarTextStyle={{ color: 'white', fontSize: 16 }}
		tabBarUnderlineStyle={{ backgroundColor: '#FED110' }}
		renderTabBar={() => <ScrollableTabBar />}>
		{
			categories.map(category => <ProductList key={category.id} tabLabel={category.name} products={products[category.id]} />)
		}
	</ScrollableTabView>
)

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