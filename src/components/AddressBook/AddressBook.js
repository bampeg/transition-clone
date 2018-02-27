import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAddresses, addNewAddress } from '../../ducks/reducer'
import './AddressBook.css'

class AddressBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditingOn: false,
            addresses: [
                {
                    description: 'Draper Apartment',
                    name: 'Courtenay',
                    companyName: '',
                    address1: '14541 Travel Drive',
                    address2: 'apt 121',
                    city: 'Draper',
                    state: 'UT',
                    zip: '84020',
                    country: 'USA',
                    phone: '703 867 3843',
                    email: 'court.eccles@gmail.com'
                },
                {
                    description: 'Draper Apartment',
                    name: 'Courtenay',
                    companyName: '',
                    address1: '14541 Travel Drive',
                    address2: 'apt 121',
                    city: 'Draper',
                    state: 'UT',
                    zip: '84020',
                    country: 'USA',
                    phone: '703 867 3843',
                    email: 'court.eccles@gmail.com'
                }
            ]
        }
    }

    handleAddressEdit() {

    }

    handleAddressDelete() {

    }

    render() {
        let contents = this.state.addresses.map( (address, i) => {
            let { description, name, companyName, address1, address2, city, state, zip, country, phone, email } = address
            return(
                <div key={ i } className='AddressBook_addressContainer'>
                    <div className='AddressBook_addyinfo AddressBook_description'>{ description }</div>
                    <div className='AddressBook_addyinfo'>{ name }</div>
                    <div className='AddressBook_addyinfo'>{ companyName }</div>
                    <div className='AddressBook_addyinfo'>{ address1 }</div>
                    <div className='AddressBook_addyinfo'>{ address2 }</div>
                    <div className='AddressBook_addyinfo'>{`${city} ${state} ${zip}`}</div>
                    <div className='AddressBook_addyinfo'>{ country }</div>
                    <div className='AddressBook_addyinfo'>{ phone }</div>
                    <div className='AddressBook_addyinfo'>{ email }</div>
                    <div className='AddressBook_footer'>
                        <div onClick={ () => this.handleAddressEdit() } className='AddressBook_edit'>EDIT</div>
                        <div onClick={ () => this.handleAddressDelete() } className='AddressBook_delete'>DELETE</div>
                    </div>
                </div>
            )
        } )

        return(
            <div className='AddressBook_mainContainer'>
                <div className='AddressBook_header'>
                    {'Below is a list of all addresses currently in your address book. You may manage your addresses below.'.toUpperCase()}
                </div>
                { contents }
                <div className='AddressBook_newAddressButton' onClick={ () => this.setState({ isEditingOn: true }) }>ENTER NEW ADDRESS</div>
            </div>
        )
        
    }
}


function mapStateToProps(state) {
    return {
        state
    }
}

export default connect( mapStateToProps, { getAddresses, addNewAddress } )(AddressBook)