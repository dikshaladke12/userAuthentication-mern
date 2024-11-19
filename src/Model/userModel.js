import mongoose from 'mongoose'

const userModel = new mongoose.Schema({
    firstName : {
        type: String,
        required:true
    },
    lastName : {
        type: String,
        required:true
    },
    email : {
        type: String,
        required:true,
        unique: true
    },
    password : {
        type: String,
        required:true
    },
    Image : {
        type: String,
        required: true
    },
})

const User = mongoose.model("User",userModel)
export default User;