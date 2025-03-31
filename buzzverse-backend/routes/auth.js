const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

// register
router.post('/register', async (req, res) => {
    
    try{
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // create user
        const newUser = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: hashedPassword,
        });

        // save user and respond
        const user = await newUser.save();
        res.status(200).json(user);

    }catch(err){
        res.status(500).json(err);
    }
});

// login
router.post('/login', async (req, res) => {

    try{
        const user = await User.findOne({email: req.body.email});
        if(!user){
            return res.status(404).json('user not found');
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword){
            return res.status(400).json('invalid password');
        }

        res.status(200).json(user);

    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;