
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    Name:String,
    EmailId:String, 
    Password:String, 
    ContactNumber:Number, 
    Role:String,
    UserId:String
})

const UserModel = mongoose.connect("user",userSchema)

module.exports = {
    UserModel
}