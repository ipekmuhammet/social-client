import React from 'react'
import { InteractionManager } from 'react-native'
import { connect } from 'react-redux'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'

import ProductList from '../components/ProductList'
import RecyclerList from '../components/RecyclerList'
import LoadingComponent from '../components/LoadingCompenent'

const ProductsScreen = ({ categories, products, selectedCategory }) => (
	<ScrollableTabView
		initialPage={selectedCategory}
		tabBarBackgroundColor={'#7849F7'}
		tabBarTextStyle={{ color: 'white', fontSize: 16 }}
		tabBarUnderlineStyle={{ backgroundColor: '#FED110' }}
		scrollWithoutAnimation={true}
		prerenderingSiblingsNumber={0}
		renderTabBar={() => <ScrollableTabBar />}>
		{
			categories.map(category => <RecyclerList key={category.id} tabLabel={category.name} list={products[category.id]} />)
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