const express =  require('express');

const User = require('../models/User');

const router = express.Router();
const {email} = req.body;
router.post('/register', async (req, res)=> {
    try{
        if(await User.findOne({email}))
        return res.send(400).send({eror :'User alrealy exists'});

        const user = undefined;

        const user = await User.create(req.body);
        return res.send({user});

    }catch(err){
        return res.status(400).send({ error: 'Registration failed'});
        }
});

module.exports = app => app.user('/auth', router);