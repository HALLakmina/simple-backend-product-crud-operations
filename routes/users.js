var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

const Validator = require('../middleware/validator')
const Validation = require('../utils/validation')
const Services = require('../services/users')
/* GET users listing. */
router.post('/',  Validator.validatorReqBody(Validation.userReqBodyValidation), async(req, res, next)=> {
  try{
    const{...payload} = req.body;
    const userIsFound = await Services.findByEmail(payload.email)
    if(userIsFound){
      return res.status(409).json({message:`User Already Exists.`})
    }
    const createUser = await Services.create(payload)
    return res.status(201).json({firstName:createUser?.firstName,lastName:createUser?.lastName,email:createUser?.email})
  }
  catch(error)
  {
    return res.status(500).json({ message: `Internal Server Error` })
  }

});

router.post(`/sign-in`, Validator.validatorReqBody(Validation.userSignInReqBodyValidation), async (req, res, next)=>{
  try{
    const {email, password} = req.body;
    const userIsFound = await Services.findByEmail(email)
    if(userIsFound){
      const passwordIsMatch = await bcrypt.compare(password, userIsFound?.password)
      if(passwordIsMatch){
        return res.status(200).json({firstName:userIsFound.firstName, lastName:userIsFound.lastName, email:userIsFound.email})
      }else{
        return res.status(400).json(error)
      }
    }else{
      res.status(404).json({ message: `User Not Found.` })
    }
  }catch(error){
    return res.status(500).json({ message: `Internal Server Error` })
  }
})

module.exports = router;
