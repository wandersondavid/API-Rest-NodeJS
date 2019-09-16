const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const UserShema = new mongose.Schema({
nome: {
    type: String,
    require: true,
},
email:{
    type: String,
    unique: true,
    require: true,
    lowercase : true,
},
password:{
    type: String,
    require: true,
    select: false,
},
createAt:{
    type: Date,
    default: Date.now,
},
});

UserShema.pre('save', function(next){
    const hash = await bcrypt.hash(this.password,10);
    this.password = hash;

    next();
})

const User = mongoose.model('User', UserShema)

module.exports = User;