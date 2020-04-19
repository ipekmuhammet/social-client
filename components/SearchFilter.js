import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native'

class SearchFilter extends React.PureComponent {

    onItemClick = () => {
        this.props.listRef.scrollToOffset(0, 236 * 3)
    }

    renderItem = ({ item }) => (
        <TouchableOpacity style={styles.mostSearchedItem} onPress={this.onItemClick}>
            <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
    )

    keyExtractor = (_, index) => 'most_searched' + Math.random()

    render() {
        return (
            <View>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={['water', 'milk', 'bread', 'egg', 'yogurt', 'coffee']}
                    keyExtractor={this.keyExtractor}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        height: 48
    },
    mostSearchedItem: {
        paddingHorizontal: RFValue(12, 600), margin: RFValue(4, 600), backgroundColor: 'white', minWidth: 60,
        alignItems: 'center', justifyContent: 'center', borderWidth: .4, borderColor: '#5D3EBD', borderRadius: 8
    },
    itemText: { color: '#5D3EBD', fontSize: RFValue(13, 600) }
})

export default SearchFilter