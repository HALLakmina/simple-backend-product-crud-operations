const product = require('../models/products')
const create = async (payload)=>{
    try{
        const newProduct = new product(payload)
        await newProduct.save()
        return newProduct
    }catch(err){
        throw err
    }
}

const findById = async (id)=>{
    try{
        const foundProduct = await product.findOne({_id:id})
        return foundProduct
    }catch(err){
        throw err
    }
}

const findAllProduct = async ()=>{
    try{
        const foundProducts = await product.find()
        return foundProducts
    }catch(err){
        throw err
    }
}

const updateById = async (id, payload)=>{
    try{
        const updateProduct = product.findOneAndUpdate({_id:id},{...payload},{new:true}).exec()
        return updateProduct
    }catch(err){
        throw err;
    }
}

const deleteById = async(id)=>{
    try{
        await product.findOneAndDelete({_id:id})
        return true 
    }catch(err){
        throw err
    }
}

module.exports ={
    create,
    findById,
    findAllProduct,
    updateById,
    deleteById
}
