import React from 'react'
import axios from 'axios'
import { RFValue } from 'react-native-responsive-fontsize'
import { ScrollView, View, TouchableOpacity, ActivityIndicator, TextInput, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SERVER_URL } from 'react-native-dotenv'

import HeadingDivider from '../components/HeadingDivider'
import SearchFilter from '../components/SearchFilter'
import RecyclerList from '../components/RecyclerList'

class SearchScreen extends React.PureComponent {

    state = {
        fetch: false,
        products: [],
        text: ''
    }

    search = (text) => {
        if (text.length > 0) {
            this.setState({ fetch: true, text })

            axios.get(`${SERVER_URL}/search-product?name=${text}`).then((response) => {
                this.setState({ products: response.data.map(({ _source }) => _source), fetch: false })
            }).catch(() => {
                this.setState({ fetch: false })
            })
        } else {
            this.setState({ fetch: false, products: [], text })
        }
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container} behavior={'height'}>
                <View style={styles.searchHeader}>
                    <View style={styles.iconContainer}>
                        <Ionicons name={'md-search'} size={32} color={'#5D3EBD'} />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={this.state.text}
                            onChangeText={this.search}
                            style={styles.searchInput} placeholder={'Ara'} />
                    </View>
                    {
                        this.state.text.length > 0 && (
                            <TouchableOpacity style={styles.iconContainer} onPress={() => {
                                this.search('')
                            }}>
                                <Ionicons name={'md-close'} size={32} color={'#6D7891'} />
                            </TouchableOpacity>
                        )
                        //  <View style={styles.iconContainer}>
                        //      <Ionicons name={'md-microphone'} size={32} color={'#6D7891'} />
                        //  </View>
                    }
                </View>

                {
                    this.state.fetch ? (
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <ActivityIndicator color={'red'} size={'large'} />
                        </View>
                    ) : (
                            !this.state.products.length > 0 ?
                                (
                                    <React.Fragment>
                                        <HeadingDivider title={'Popüler aramalar'} />
                                        <SearchFilter onClick={this.search} />
                                    </React.Fragment>
                                ) :
                                (
                                    <View style={{ flex: 1 }}>
                                        <RecyclerList list={this.state.products} fromSearch />
                                    </View>
                                )
                        )
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    searchHeader: { height: 50, margin: RFValue(2, 600), flexDirection: 'row', backgroundColor: 'white' },
    mostSearchContainer: { flex: .7, padding: RFValue(2, 600), margin: RFValue(2, 600), alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' },
    iconContainer: { alignItems: 'center', justifyContent: 'center', flex: 1 },
    inputContainer: { alignItems: 'center', justifyContent: 'center', flex: 6, display: 'flex', flexDirection: 'row' },
    searchInput: { textAlign: 'left', flex: 1, fontSize: 20 },
    emptyFooter: { flex: 7, margin: RFValue(2, 600) }
})

export default SearchScreen