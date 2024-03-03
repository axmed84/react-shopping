import  Jwt  from "jsonwebtoken";

import { JWT_SECRET } from "../config/config.js";

export const authenticate = (req, res, next) => {
    const token = req.cookies.token;
    
    if(!token) return res.status(405).send("Access denied Please Login")

    try{

        const decoded = Jwt.verify(token, JWT_SECRET);

        req.user = decoded

        next();
    } catch (error) {
        
    }
}