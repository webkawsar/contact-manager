const router = require('express').Router();
const contactsController = require("../Controllers/contactsController");



router.post('/', contactsController.createContact);
router.get('/', contactsController.getContacts);


module.exports = router;