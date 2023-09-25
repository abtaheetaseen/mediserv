const express = require('express')
const cors = require('cors')

const products = require('./products')

const app = express()

// app.use(cors());

app.use(express.json())
app.use(cors());

app.get('/products', (req, res)=>{
    res.send(products)
})

// const port = process.env.PORT || 5000

app.listen(5000, console.log('Server running on 5000'))