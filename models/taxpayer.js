const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaxpayerSchema = new Schema({
    TIN: String,
    VATRn: String,
    FullBusinessName: String,
    FullName: String,
})

const TaxPayer = mongoose.model('TaxPayer', TaxpayerSchema)

module.exports = TaxPayer
