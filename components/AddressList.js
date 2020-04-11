import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

import { deleteAddress, setSelectedAddress } from '../actions/actions2'

import InteractiveSettingItem from './InteractiveSettingItem'
import DeleteAddressPopup from './popups/DeleteAddressPopup'

class AddressList extends React.PureComponent {

    state = {
        addressId: '',
        scaleAnimationModal: false
    }

    setPopupState = (state, deleteStatus) => {
        this.setState(state)

        if (deleteStatus) {
            this.props.deleteAddress(this.state.addressId, this.props.token)
        }
    }

    render() {
        return (
            <React.Fragment>
                <FlatList
                    data={this.props.addresses}
                    keyExtractor={item => item._id}
                    renderItem={({ item: address }) => (
                        <InteractiveSettingItem title={address.open_address}
                            onLeftClick={() => {
                                this.props.setSelectedAddress(address._id, () => {
                                    this.props.navigation.goBack()
                                    this.props.stackNavigation.popToTop()
                                })
                            }}
                            onRightIconClick={() => {
                                this.setPopupState({ scaleAnimationModal: true, addressId: address._id })
                            }}>
                            <Ionicons color={'#4522A0'} name={'md-locate'} size={32} />
                            <Ionicons color={'#4522A0'} name={'md-trash'} size={32} />
                        </InteractiveSettingItem>
                    )}
                    ListFooterComponent={this.props.footer}
                />
                <DeleteAddressPopup scaleAnimationModal={this.state.scaleAnimationModal} setPopupState={this.setPopupState} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({
    reducer2: {
        addresses
    },
    reducer4: {
        token
    }
}) => ({
    addresses,
    token
})

const mapDispatchToProps = {
    setSelectedAddress,
    deleteAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressList)