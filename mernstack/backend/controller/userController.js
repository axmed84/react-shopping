import { JWT_SECRET } from "../config/config.js";
import User from "../models/User.js";
import jwt from 'jsonwebtoken';

export const registerUser = async (req,res) => {
    try{
       
        // const email = req.body.email;
        // const username = req.body.username;
        // const password = req.body.password

        const {email, username, password} = req.body
        
        const isUserExists = await User.findOne({
            $or: [
                {email: email },
                {username: username }
            ]
        })

        if(isUserExists){
            return res.status(400).send("email or username already exist")
        }

        const userInfo = new User({
            username: username,
            password: password,
            email: email,
        })

        await userInfo.save();
        userInfo.password = undefined

        return res.status(201).send(userInfo)

    } catch (err){
        console.log("error at registerUser", err.message)
        res.status(500).send('something went wrong');

    }
}

export const LoginUser = async (req,res) => {
    try{

        const {email, password} = req.body;
        const isUserExists = await User.findOne({ email: email
        }).select("+password");

        if(!isUserExists){
            return res.status(400).send("email is not found")
        }

        // Password checking

        const isPasswordCorrect = await isUserExists.comparePassword(password);

        if(!isPasswordCorrect) {
            return res.status(400).send("incorrect Password")
        }

        // token generation

        const expiresIn = 7 * 24 * 60 * 60;

        const token = jwt.sign({_id : isUserExists._id}, JWT_SECRET, {
            expiresIn})

            res.cookie('token', token, {
                httpOnly: true,
                secure: false,
                maxAge: expiresIn * 1000
            })

            isUserExists.password = undefined

        res.status(200).send({...isUserExists.toJSON(), expiresIn})

    } catch (err) {
        console.log("eror at loginUser", err)
        res.status(400).send(err.message)
    }
}