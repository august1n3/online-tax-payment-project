const express = require('express')
const app = express()
const mongoose = require('mongoose')
const TaxPayer = require('./models/taxpayer')

require('dotenv/config')


mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then((result) => console.log('connected'))
    .catch((error) => console.log(error))


app.get('/taxpayers/:TIN', (req, res) => {
    console.log("Fetching taxpayer with TIN:", req.params.TIN)
    let tin = req.params.TIN

    TaxPayer.findOne({ "TIN": tin })
        .then((result) => {
            console.log("kitu flani")
            res.json(result) })
        .catch((error) => console.log(error.message))
    console.log()

})




app.listen(process.env.PORT)
