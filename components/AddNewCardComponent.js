import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

const AddNewCardComponent = ({ navigation }) => (
    <React.Fragment>
        <TouchableOpacity style={styles.container} onPress={() => {
            navigation.navigate('addNewCardScreen')
        }}>
            <View style={styles.child}>
                <View style={styles.iconContainer}>
                    <Ionicons name={'md-add'} size={32} color={'#5D3EBD'} />
                </View>
            </View>
            <View style={[styles.child, styles.textContainer]}>
                <View style={styles.child}>
                    <Text style={styles.highlightedText}>{'Add New Card'}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.child}>
                <View style={styles.emptyIcon} />
            </TouchableOpacity>
        </TouchableOpacity>

        {
            //  <TouchableOpacity style={styles.container}>
            //      <View style={styles.child}>
            //          <Ionicons name={'md-add'} size={32} color={'#5D3EBD'} />
            //      </View>
            //      <View style={[styles.child, { flex: 1, alignItems: 'flex-start', marginHorizontal: 6 }]}>
            //          <View style={styles.child}>
            //              <Text style={styles.highlightedText}>{'Add Card with BKM Express'}</Text>
            //          </View>
            //      </View>
            //      <TouchableOpacity style={styles.child}>
            //          <Ionicons name={'md-trash'} size={32} color={'black'} />
            //      </TouchableOpacity>
            //  </TouchableOpacity>
        }
    </React.Fragment>
)

const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'row', padding: 8, marginHorizontal: 6 },
    child: { alignItems: 'center', justifyContent: 'center', marginHorizontal: 8 },
    cardName: { fontSize: RFValue(16, 600)},
    cardNumber: { fontSize: RFValue(15, 600), color: '#6C7486' },
    highlightedText: { fontSize: RFValue(16, 600), color: '#5D3EBD' },
    iconContainer: { height: 24, width: 36, alignItems: 'center', justifyContent: 'center' },
    emptyIcon: { height: 32 },
    textContainer: { flex: 1, alignItems: 'flex-start', marginHorizontal: 6 }
})

export default AddNewCardComponent