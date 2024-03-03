import express from 'express'
import { LoginUser, registerUser } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.post('/registeruser', registerUser)
userRouter.post('/login-user', LoginUser)


export default userRouter