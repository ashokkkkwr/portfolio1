import {Request,Response,NextFunction} from 'express';
import jwt from 'jsonwebtoken'  
const authmiddleware = (req: Request,res: Response,next:NextFunction)=>{
    //to check token in headers
    const token = req.header('Authorization');
    //to check if token is found or not
    if(!token){
        return res.status(401).json({message:'Authorization header not found'})
    }
    try{
        const decoded = jwt.verify(token,'your_secret_key') as {}
    }
}
