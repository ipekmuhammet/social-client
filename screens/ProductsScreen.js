import React from 'react'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import { connect } from 'react-redux'

import { getCategories, getProductsByCategoryId } from '../data/api'

import ProductList from '../components/ProductList'

const ProductsScreen = ({ selectedCategory }) => (
    <ScrollableTabView
        initialPage={selectedCategory}
        tabBarBackgroundColor={'#7849F7'}
        tabBarTextStyle={{ color: 'white', fontSize: 16 }}
        tabBarUnderlineStyle={{ backgroundColor: '#FED110' }}
        renderTabBar={() => <ScrollableTabBar />}
    >
        {
            getCategories().map(category => <ProductList key={category.Id} tabLabel={category.name} products={getProductsByCategoryId(category.Id)} />)
        }
    </ScrollableTabView>
)

const mapStateToProps = ({
    reducer3: {
        selectedCategory
    }
}) => ({
    selectedCategory
})

export default connect(mapStateToProps)(ProductsScreen)