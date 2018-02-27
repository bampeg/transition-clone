import axios from 'axios'

const initialState = {
    peddler: {}
}

const GET_PEDDLER = 'GET_PEDDLER'
    , GET_ADDRESSES = 'GET_ADDRESSES'
    , ADD_NEW_ADDRESS = 'ADD_NEW_ADDRESS'

export function getPeddler() {
    const peddler = axios.get('/auth/me').then( response => response.data )
    return {
        type: GET_PEDDLER,
        payload: peddler
    }
}

export function addNewAddress(addressDataObject) {
    const newAddress = axios.post('/api/addNewAddress', addressDataObject).then( response => response.data )
    return {
        type: ADD_NEW_ADDRESS,
        payload: newAddress
    }
}

export function getAddresses() {
    const addresses = axios.get('/api/getAddresses').then( response => response.data )
    return {
        type: GET_ADDRESSES,
        payload: addresses
    }
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PEDDLER + '_FULFILLED':
            return Object.assign({}, state, { peddler: action.payload })
        default:
            return state
    }
}