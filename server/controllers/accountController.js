module.exports = {
    getAddresses: function(req, res) {
        console.log('OUCH, you hit me. -getAddresses')
        const { peddler_id } = req.user
        req.app.get('db')
           .get_addresses(peddler_id)
           .then( peddlerAddress => res.status(200).send(peddlerAddress) )
           .catch( () => res.status(500).send('Could not get addresses. -getAddresses') )
    },

    addNewAddress: function(req, res) {
        console.log('OUCH, you hit me. -addNewAddress')
        const { peddler_id } = req.user
        req.app.get('db')
           .add_new_address(peddler_id)
           .then( () => res.status(200).send('New address successfully added!') )
           .catch( () => res.status(500).send('Could not add new address. -addNewAddress') )
    }
}