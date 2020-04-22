import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'

import RecyclerList from '../components/RecyclerList'

const ProductsScreen = ({ categories, products, selectedCategory, navigation }) => (
	<ScrollableTabView
		initialPage={selectedCategory}
		tabBarBackgroundColor={'#7849F7'}
		tabBarTextStyle={styles.tabBarTextStyle}
		tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
		scrollWithoutAnimation={true}
		prerenderingSiblingsNumber={0}
		renderTabBar={() => <ScrollableTabBar />}>
		{
			categories.map(category => <RecyclerList key={category.id} navigation={navigation} tabLabel={category.name} list={products[category.id]} />)
		}
	</ScrollableTabView>
)

const styles = StyleSheet.create({
	tabBarTextStyle: { color: 'white', fontSize: RFValue(15, 600) },
	tabBarUnderlineStyle: { backgroundColor: '#FED110' }
})

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