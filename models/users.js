const mongoose = require('mongoose');

const schema = mongoose.Schema;

const user = new schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true, unique: true },
    password:{type:String, required:true},
}, { timestamps: true })

const users = mongoose.model('users',user);
module.exports = users