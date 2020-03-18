import React from 'react'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'

import { getCategories, getProductsByCategoryId } from '../data/api'

import ProductList from '../components/ProductList'

const ProductsScreen = () => (
    <ScrollableTabView
        initialPage={1}
        tabBarBackgroundColor={'#7849F7'}
        tabBarTextStyle={{ color: 'white' }}
        tabBarUnderlineStyle={{ backgroundColor: '#FED110' }}
        renderTabBar={() => <ScrollableTabBar />}
    >
        {
            getCategories().map(category => <ProductList key={category.Id} tabLabel={category.name} products={getProductsByCategoryId(category.Id)} />)
        }
    </ScrollableTabView>
)

export default ProductsScreen