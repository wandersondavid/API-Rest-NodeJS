const express = require('express')
const boyParser =  require('body-parser')

const app = express()

app.use(boyParser.json())
app.use(boyParser.urlencoded({extended: false}))

// app.get('/', (req,res)=>{

//     res.send('Hello word!')


// })
require('./controllers/authController')(app)

app.listen(3000)
