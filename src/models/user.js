const mongoose = require('mongoose')

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
})

const User = mongoose.model('User', UserShema)

module.exports = User;