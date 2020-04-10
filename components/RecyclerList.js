import React from 'react'
import { Dimensions } from 'react-native'
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview'

import Product from './Product'
import EmptyProduct from './EmptyProduct'

class List extends React.PureComponent {
    constructor(args) {
        super(args)

        let { width } = Dimensions.get('window')

        let dataProvider = new DataProvider((r1, r2) => r1 !== r2)
        
        this.layoutProvider = new LayoutProvider(index => {
            return 0
        }, (type, dim) => {
            dim.width = width / 3
            dim.height = 240
        })

        this.state = {
            dataProvider: dataProvider.cloneWithRows(this.props.list)
        }
    }

    rowRenderer = (type, item) => item.empty ? <EmptyProduct /> : <Product key={item.id} data={item} />

    render() {
        return <RecyclerListView
            layoutProvider={this.layoutProvider}
            dataProvider={this.state.dataProvider}
            rowRenderer={this.rowRenderer} />
    }
}

export default List