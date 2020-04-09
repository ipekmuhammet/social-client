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

        this.rowRenderer = this.rowRenderer.bind(this)
        this.state = {
            // dataProvider: dataProvider.cloneWithRows(this.makeColumns(this.props.list))
            dataProvider: dataProvider.cloneWithRows(this.props.list)
        }
    }

    makeColumns = (list) => {
        let row = []
        return list.reduce((previousValue, currentValue) => {
            let returningValue = []
            row.push(currentValue)

            if (row.length === 3) {
                returningValue = [row, ...previousValue]
                row = []
            } else {
                returningValue = previousValue
            }
            return returningValue
        }, [])
    }

    rowRenderer = (type, item) => item.empty ? <EmptyProduct /> : (
        <Product key={item.id} data={item} />
        //  <View style={{ flexDirection: 'row', flex: 1 }}>
        //      <Product key={item[0].id} data={item[0]} />
        //      <Product key={item[1].id} data={item[1]} />
        //      <Product key={item[2].id} data={item[2]} />
        //  </View>
    )

    render() {
        return <RecyclerListView
            // forceNonDeterministicRendering={true}
            layoutProvider={this.layoutProvider}
            dataProvider={this.state.dataProvider}
            rowRenderer={this.rowRenderer} />
    }
}

export default List