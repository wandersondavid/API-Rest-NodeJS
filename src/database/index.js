const mongoose = require('mongoose')
 
mongose.connect('mongodb://localhost/noderest', {userMongoClient: true})
mongose.Promise = global.Promise

module.exports = mongoose