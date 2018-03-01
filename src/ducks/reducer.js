import axios from 'axios'

const initialState = {
    peddler: {},
    addresses: []

}

const GET_PEDDLER = 'GET_PEDDLER'
    , GET_ADDRESSES = 'GET_ADDRESSES'
    , ADD_NEW_ADDRESS = 'ADD_NEW_ADDRESS'
    , DELETE_ADDRESS = 'DELETE_ADDRESS'

export function getPeddler() {
    const peddler = axios.get('/auth/me').then( response => response.data )
    return {
        type: GET_PEDDLER,
        payload: peddler
    }
}

export function addNewAddress(addressDataObject) {
    const addresses = axios.post('/api/addNewAddress', addressDataObject).then( response => response.data )
    return {
        type: ADD_NEW_ADDRESS,
        payload: addresses
    }
}

export function getAddresses() {
    const addresses = axios.get('/api/getAddresses').then( response => response.data )
    return {
        type: GET_ADDRESSES,
        payload: addresses
    }
}

export function deleteAddress(addyID) {
    const addresses = axios.delete(`/api/deleteAddress/${addyID}`).then( response => response.data )
    return {
        type: DELETE_ADDRESS,
        payload: addresses
    }
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PEDDLER + '_FULFILLED':
            return Object.assign({}, state, { peddler: action.payload })
        case GET_ADDRESSES + '_FULFILLED':
            return Object.assign({}, state, { addresses: action.payload })
        case ADD_NEW_ADDRESS + '_FULFILLED':
            return Object.assign({}, state, { addresses: action.payload })
        case DELETE_ADDRESS + '_FULFILLED':
            return Object.assign({}, state, { addresses: action.payload })
        default:
            return state
    }
}