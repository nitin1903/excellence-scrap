const mongoose = require('mongoose')
const {dbUrl} = require('./config')

mongoose.connect(dbUrl, {useNewUrlParser : true})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('we are connected to database')
})

module.exports = db