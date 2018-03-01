module.exports = {
    getAddresses: function(req, res) {
        console.log('OUCH, you hit me. -getAddresses')
        if(req.user) {
            const { peddler_id } = req.user
            req.app.get('db')
            .get_addresses(peddler_id)
            .then( peddlerAddress => res.status(200).send(peddlerAddress) )
            .catch( () => res.status(500).send('Could not get addresses. -getAddresses') )
        } else {
            res.status(401).send('You are not logged in. -addNewAddress')
        }
    },

    addNewAddress: function(req, res) {
        console.log('OUCH, you hit me. -addNewAddress')
        if(req.user) {
            const { peddler_id } = req.user
            const { description, name, companName, address1, address2, city, state, zip, country, phone, email } = req.body
            const newAddyInput = [peddler_id, description, name, companName, address1, address2, city, state, zip*1, country, phone*1 || null, email]
            req.app.get('db')
               .add_new_address(newAddyInput)
               .then( () => res.status(200).send('New address successfully added!') )
               .catch( err => { 
                   console.log(err)
                   res.status(500).send('Could not add new address. -addNewAddress') 
                } )
        } else {
            res.status(401).send('You are not logged in. -addNewAddress')
        }
    },

    deleteAddress: function(req, res) {
        console.log(req.params.addyID)
        console.log('OUCH, you hit me. -deleteAddress')
        if(req.user) {
            const { peddler_id } = req.user
            const { addyID } = req.params
            console.log(addyID)
            req.app.get('db')
                .delete_address([addyID , peddler_id])
                .then( peddlerAddress => {
                    console.log(peddlerAddress)
                    res.status(200).send(peddlerAddress)
                } )
                .catch( err => {
                    console.log(err)
                    res.status(500).send('Could not delete address. -deleteAddress')
                } )
        } else {
            res.status(401).send('You are not logged in. -deleteAddress')
        }
    },

    editAddress: function(req, res) {
        console.log('OUCH, you hit me. -editAddress')
        if(req.user) {

        } else {
            res.status(401).send('You are not logged in. -editAddress')
        }
    }
}