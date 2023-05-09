



module.exports.createContact = (req, res) => {
    console.log(req.body, 'req.body')
    res.send({success: true, data: []})
}


module.exports.getContacts = (req, res) => {
    res.send({success: true, data: []})
}





