// Old way
// const express = require('express');
// New Way

import express from 'express'
import connectDb from './config/db.js';
import { registerUser } from './controller/userController.js';
import userRouter from './routes/user.js';
import cookieParser from 'cookie-parser';
import postRouter from './routes/post.js';

const app = express();
const PORT = 8000

app.use(express.json());
app.use(cookieParser())

// app.post('/api/registeruser', registerUser)

app.use('/api/user', userRouter)
app.use('/api/post', postRouter)


connectDb()

app.listen(PORT, ()=> {
    console.log(`server listening on ${PORT}`)
})