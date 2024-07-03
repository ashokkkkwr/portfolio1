import { type NextFunction,type Request,type Response } from "express";
import {DotenvConfig} from '../config/env.config'
import {Message}from '../constant/messages'
//error any defines that the error parameter can be of any type.
export const errorHandler = (error:any,req:Request,res:Response,next:NextFunction)=>{
    let statusCode = 500
    let data ={
        suceess:false,
        message:Message.error,
// ... is a spread operator that helps to take all the items in an array
// and spread them out wherver you need them.
        ...(DotenvConfig.DEBUG_MODE === 'true' &&{originalError:error.message})
    }
    if(error?.isOperational || error?.isCustom){
        statusCode = error.statusCode
        data={
            ...data,
            message:error.message
        }
    }
    return res.status(statusCode).json(data)
}