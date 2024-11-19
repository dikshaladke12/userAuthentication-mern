import User from '../Model/userModel'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import path from 'path'

export const userRegister =async (req,res)=>{
    try {
        const {firstName, lastName, email,password} = req.body;
        const Image = req.file?.filename;
        const hashPassword = bcrypt.hashSync(password, 10)

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashPassword,
            Image: Image
        })
        await newUser.save();
        
        return res.status(200).json({message: "new User created", UserData : newUser})
    } catch (error) {
        console.error("error",error.message)
        return res.status(500).json({message: error.message})
    }
}

export const getUserdetails = async(req, res)=>{    
    try {
        const id = req.params.id;
        const userData = await User.findOne({_id: id})
        if(!userData)
        {
            return res.status(404).json({message: "user not available "})
        }
        return res.status(200).json(userData)

    } catch (error) {
        console.error("error",error.message)
        return res.status(500).json({message: "error while getting user Details "});
    }
}