const bcrypt = require('bcrypt')

const hashPassword = async(password)=>{
    const salt = await bcrypt.genSalt(10)
    const hash_password = await bcrypt.hash(password, salt)
    return hash_password
}

module.exports= {
    hashPassword
}