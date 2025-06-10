const Joi = require('joi')

const userReqBodyValidation = {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
}

const userSignInReqBodyValidation = {
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
}

const productReqBodyValidation = {
    name: Joi.string().required(),
    pice: Joi.number().required(),
    quantity: Joi.number().required()
}

const idReqPathValidation = {
    id: Joi.string().min(24).max(24).required()
}

module.exports={
    userReqBodyValidation,
    userSignInReqBodyValidation,
    productReqBodyValidation,
    idReqPathValidation
}