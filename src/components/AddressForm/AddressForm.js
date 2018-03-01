import React from 'react'

export default function AddressForm(props) {

    return(
        <div className='AddressBook_mainContainer'>
            <div className='AddressBook_header'>PLEASE ENTER YOUR ADDRESS BELOW.</div>
            <div className='AddressBook_addressContainer'>
                <div className='AddressBook_addyinfo'>DESCRIPTION</div>
                <input type="text" onChange={ e => this.handleNewAddressInput(e.target.value, 'description') } value={ this.state.description } placeholder='eg: Primary Home'/>
                <div className='AddressBook_addyinfo'>NAME</div>
                <input type="text" onChange={ e => this.handleNewAddressInput(e.target.value, 'name') } value={ this.state.name }/>
                <div className='AddressBook_addyinfo'>COMPANY NAME (OPTIONAL)</div>
                <input type="text" onChange={ e => this.handleNewAddressInput(e.target.value, 'companyName') } value={ this.state.companyName }/>
                <div className='AddressBook_addyinfo'>STREET ADDRESS LINE 1</div>
                <input type="text" onChange={ e => this.handleNewAddressInput(e.target.value, 'address1') } value={ this.state.address1 }/>
                <div className='AddressBook_addyinfo'>STREET ADDRESS LINE 2 (OPTIONAL)</div>
                <input type="text" onChange={ e => this.handleNewAddressInput(e.target.value, 'address2') } value={ this.state.address2 }/>
                <div className='AddressBook_addyinfo'>CITY</div>
                <input type="text" onChange={ e => this.handleNewAddressInput(e.target.value, 'city') } value={ this.state.city }/>
                <div className='AddressBook_addyinfo'>STATE/PROVINCE</div>
                <select value={ this.state.state } onChange={ e => this.handleNewAddressInput(e.target.value, 'state') }>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
                <div className='AddressBook_addyinfo'>POSTAL CODE</div>
                <input type="text" onChange={ e => this.handleNewAddressInput(e.target.value, 'zip') } value={ this.state.zip }/>
                <div className='AddressBook_addyinfo'>COUNTRY</div>
                <select name="Country" onChange={ e => this.handleNewAddressInput(e.target.value, 'country') } value={ this.state.country }>
                    <option value="USA">USA</option>
                    <option value="CAN">Canada</option>
                    <option value="Other">Other</option>
                </select>
                <div className='AddressBook_addyinfo'>PHONE</div>
                <input type="text" onChange={ e => this.handleNewAddressInput(e.target.value, 'phone') } value={ this.state.phone }/>
                <div className='AddressBook_addyinfo'>EMAIL</div>
                <input type="text" onChange={ e => this.handleNewAddressInput(e.target.value, 'email') } value={ this.state.email }/>
            </div>
            <div onClick={ () => this.setState({ addNewAddress: false }) }>CANCEL</div>
            <div onClick={ () => this.handleSaveAddress() }>SAVE ADDRESS</div>
        </div>
    )
}