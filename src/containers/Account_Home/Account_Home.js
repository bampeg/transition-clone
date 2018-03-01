import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPeddler, addNewAddress, getAddresses } from '../../ducks/reducer'
import './Account_Home.css'
import ExpandableBox from '../../components/ExpandableBox/ExpandableBox'
import AddressBook from '../../components/AddressBook/AddressBook'

class Account extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    componentDidMount() {
        this.props.getPeddler()
        this.props.getAddresses()
    }

    greetamajig() {
        const { peddlerData }= this.props
        // console.log('peddler_first_name', peddlerData.peddler_first_name)

        if(peddlerData.peddler_first_name) {
            return `WELCOME, ${ peddlerData.peddler_first_name.toUpperCase() } ${ peddlerData.peddler_last_name.toUpperCase() }`
        }
            return 'WELCOME'
    }

    myAddressBook() {

    }

    myOrderHistory() {

    }
    
    render() {
        const { peddlerData }= this.props
        // console.log(peddlerData)

        let accountStuff = `Account name: ${peddlerData.peddler_first_name} ${peddlerData.peddler_last_name}`
          , creditCardStuff = <button>GIVE US YOUR MONEY</button>
          , addressBookStuff = <AddressBook/>
          , orderHistoryStuff = <div>YOUR ORDER HISTORY</div>

        return(
            <div className='accountContainer'>
                <div className='greetamajig'>{ this.greetamajig() }</div>
                <ExpandableBox 
                    notExpandedBackgroundColor='#666666' 
                    expandedBackgroundColor='gray' 
                    boxTitle='MY PROFILE'
                >{ accountStuff }</ExpandableBox>
                <ExpandableBox 
                    notExpandedBackgroundColor='#666666' 
                    expandedBackgroundColor='gray'
                    boxTitle='MY CREDIT CARDS'
                >{ creditCardStuff }</ExpandableBox>
                <ExpandableBox 
                    notExpandedBackgroundColor='#666666' 
                    expandedBackgroundColor='gray'
                    boxTitle='MY ADDRESS BOOK'
                >{ addressBookStuff }</ExpandableBox>
                <ExpandableBox 
                    notExpandedBackgroundColor='#666666' 
                    expandedBackgroundColor='gray'
                    boxTitle='MY ORDER HISTORY'
                >{ orderHistoryStuff }</ExpandableBox>
                <div className='notExpanded boxTitle'><a href='http://localhost:3002/logout'>LOGOUT</a></div>
                <div className='notExpanded'></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        peddlerData: state.peddler
    }
}

export default connect( mapStateToProps, { getPeddler, addNewAddress, getAddresses } )(Account)