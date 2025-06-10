const Joi = require('joi')

const validatorReqBody =  (obj) => {
    const validateObj = Joi.object({...obj});
    return async (req, res, next) => {
        const payload = req.body;
        try{
            await validateObj.validateAsync(payload, { abortEarly: false })            
            next()
        }catch(error){
            if(error.isJoi){
                return  res.status(400).json(error.details)
            }
            return res.status(500).json({ message: `Internal Server Error` })
        }        
    }  
} 

const validatorReqPath = (obj) => {    
    const validateObj = Joi.object({...obj});
    return async (req, res, next) => {
        const params = req.params;
        try{
            await validateObj.validateAsync(params, { abortEarly: false })
            next();
        } catch(err) {
            if(err.isJoi) {
                return  res.status(400).json(error.details)
            }
            return res.status(500).json({ message: `Internal Server Error` })
        }
    }
}

module.exports={
    validatorReqBody,
    validatorReqPath
}