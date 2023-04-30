const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');

const org = process.env.ORG

// importing data model schemas
const { auth } = require('../models/models')

router.post('/login', async (req, res) => {
const { UserName, passphrase } = req.body;

try {
    const user = await auth.findOne({ UserName });
    if (!user) {        
        return res.status(201).json({ message: 'Invalid username or password' });
    }

    const userFound = await bcrypt.compare(passphrase, user.EncryptedPass);
    if (userFound) {
        return res.status(200).json({ message: 'Logged in successfully!' });
    } else {
        return res.status(201).json({message: 'Invalid username or password'});
    }

} catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
}
});


module.exports = router
