const { string, required } = require('joi')
const mongoose = require('mongoose')

const schema = mongoose.Schema

const product = new schema({
    name:{type:String, required:true},
    price:{type:Number, required:true},
    quantity:{type:Number, required:true}
})

const products = mongoose.model('products',product)
module.exports = products