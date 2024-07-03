import compression from 'compression'
import cors from 'cors'

import express,{NextFunction,Request,Response,type Application} from 'express'
//import path to work with file and directory paths
import path from 'path'
import {DotenvConfig} from '../config/env.config'
import {StatusCodes} from '../constant/statusCodes'

import {errorHandler} from   './errorHandler.middleware'
import {morganMiddleware} from './morgan.middleware'

//type application can be used to ensure that variable is of the application type
//providing type safety when dealing with the express app.
const middleware=(app:Application)=>{
    app.use(compression())

//cors is a security feature that restricts how webages can make requests 
//to a different domain than the one that served the web page.
   app.use(cors({
      //specifies the origin that are allowed to access the server
      origin:DotenvConfig.CORS_ORIGIN,
//`OPTIONS` asks the server what kind of requests are allowed.
      methods:['GET','POST','PATCH','DELETE','PUT','OPTIONS'],
      allowedHeaders:['Content-Type', 'Authorization'],
   }))
   app.use((req:Request,res:Response,next:NextFunction)=>{
    const userAgent = req.headers['user-agent']
    const apiKey = req.headers['apiKey']
    if(userAgent && userAgent.includes('Mozilla')){
        next()
    }else{
        if(apiKey === DotenvConfig.API_KEY){
            next()
        }else{
            res.status(StatusCodes.FORBIDDEN).send('Forbidden')
        }
    }
   })
   app.use(
    express.json({
        limit:'10mb',
    })
   )
   app.use(morganMiddleware)
//This serves static files from `public` directory. Any files in this directory
//can be accessed via the root url
//If you have a file named image.png in the public directory, it will be 
//accessible via the URL http://yourdomain.com/image.png.
app.use(express.static(path.join(__dirname,'..','..','public')))
//This serves static files specifically from the public/uploads directory. 
//Files in this directory can be accessed via /public/uploads.
// If you have a file named file.txt in the public/uploads directory, 
// it will be accessible via the URL http://yourdomain.com/public/uploads/file.txt.
app.use('/public/uploads',express.static(path.join(__dirname,'..','..','public/uploads')))
app.set('views',path.join(__dirname,'../','views'))
app.use('/',(_,res:Response)=>{
    res.render('index')
})
app.use(errorHandler)
}
export default middleware
