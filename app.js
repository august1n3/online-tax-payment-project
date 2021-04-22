const express = require('express')
const app = express()
const mongoose = require('mongoose')
const TaxPayer = require('./models/taxpayer')

require('dotenv/config')

var isMongoDBConnected = false

mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then((result) => isMongoDBConnected = true)
    .catch((error) => console.log(error))


app.get('/taxpayers/:TIN', (req, res) => {
    let tin = req.params.TIN

    TaxPayer.findOne({ "TIN": "MGi3refspwf4tp" })
        .then((result) => { res.json(result) })
        .catch((error) => console.log(error))
    console.log()

})




app.listen(8000)