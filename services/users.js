const {hashPassword} = require('../utils/hash')
const users = require('../models/users')

const create = async (payload) =>{
    try{
        const {firstName, lastName, email, password} = payload
        const hash_password = await hashPassword(password)
        const newUser = new users({firstName, lastName, email, password:hash_password});
        await newUser.save()
        return newUser
    }
    catch(err){
        throw err;
    }
}

const findByEmail = async (email)=>{
    try{
        const user = await users.findOne({email})
        return user
    }catch(error){
        throw error
    }
}

module.exports={
    create,
    findByEmail
}