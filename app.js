const express = require('express')
const app = express()
require('dotenv/config')


const MongoClient = require('mongodb').MongoClient

const client = new MongoClient(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
var taxpayer = ''

app.get('/tp/:tin', async(req, res) => {
    client.connect(err => {
        const collection = client.db('RevenueAuthorityDatabase').collection('Taxpayer Informations')

        //This will format the document to a JSON string
        function transformToString(doc) {

            if (JSON.stringify(doc, 4) != null) {
                taxpayer = JSON.stringify(doc, 4)

            }

        }

        //This statement will find the taxpayer information with the provided Taxpayer number
        collection.find({ "TIN": req.params.tin }).forEach(transformToString);



    });

    console.log(taxpayer)
    res.json(taxpayer)
})


app.listen(8080)