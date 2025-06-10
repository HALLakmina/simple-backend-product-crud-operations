var express = require('express');
var router = express.Router();

const Validator = require('../middleware/validator')
const Validation = require('../utils/validation')
const Services = require('../services/products')

router.post('/',Validator.validatorReqBody(Validation.productReqBodyValidation), async (req, res, next)=>{
    try{
        const {...payload} = req.body
        const newProduct = await Services.create(payload)
        return res.status(201).json(newProduct)
    }catch(err){
        return res.status(500).json({ message: `Internal Server Error` })
    }
})

router.get('/',async(req,res,next)=>{
    try{
        const foundAllProducts = await Services.findAllProduct()
        if(foundAllProducts){
            return res.status(302).json(foundAllProducts)
        }else{
            return res.status(404).json({message:`Product Not Found`})
        }
    }catch(err){
        console.log(err)
        return res.status(500).json({ message: `Internal Server Error` })
    }
})

router.get('/:id', Validator.validatorReqPath(Validation.idReqPathValidation),async(req,res,next)=>{
    try{
        const {id} = req.params
        const foundProduct = await Services.findById(id)
        if(foundProduct){
            return res.status(302).json(foundProduct)
        }else{
            return res.status(404).json({message:`Product Not Found`})
        }
    }catch(err){
        return res.status(500).json({ message: `Internal Server Error` })
    }
})

router.put('/:id',Validator.validatorReqPath(Validation.idReqPathValidation),Validator.validatorReqBody(Validation.productReqBodyValidation), async (req, res, next)=>{
    try{
        const {id} = req.params
        const {...payload} = req.body
        const productIsFound = await Services.findById(id)
        if(productIsFound){
            const updateProduct = await Services.updateById(id, payload)
            return res.status(200).json(updateProduct)
        }else{
            return res.status(404).json({message:`Product Not Found`})
        }
    }catch(err){
        console.log(err)
        return res.status(500).json({ message: `Internal Server Error` })
    }
})

router.delete('/:id', Validator.validatorReqPath(Validation.idReqPathValidation),async(req,res,next)=>{
    try{
        const {id} = req.params
        const productIsFound = await Services.findById(id)
        if(productIsFound){
            const products = await Services.deleteById(id)
            return res.status(200).json({message:"Product Delete Successfully", answer:products})
        }else{
            return res.status(404).json({message:`Product Not Found`})
        }
    }catch(err){
        return res.status(500).json({ message: `Internal Server Error` })
    }
})
module.exports =router