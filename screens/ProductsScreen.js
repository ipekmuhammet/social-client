import React from 'react'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import { connect } from 'react-redux'

import { getProductsByCategoryId } from '../data/api'

import ProductList from '../components/ProductList'

const ProductsScreen = ({ selectedCategory, categories }) => (
	<ScrollableTabView
		initialPage={selectedCategory}
		tabBarBackgroundColor={'#7849F7'}
		tabBarTextStyle={{ color: 'white', fontSize: 16 }}
		tabBarUnderlineStyle={{ backgroundColor: '#FED110' }}
		renderTabBar={() => <ScrollableTabBar />}
	>
		{
			categories.map(category => <ProductList key={category.Id} tabLabel={category.name} products={getProductsByCategoryId(category.Id)} />)
		}
	</ScrollableTabView>
)

const mapStateToProps = ({
	reducer3: {
		selectedCategory
	},
	reducer4: {
		categories
	}
}) => ({
	selectedCategory,
	categories
})

export default connect(mapStateToProps)(ProductsScreen)