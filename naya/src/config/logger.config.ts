import winston from 'winston'
import { Environment } from '../constant/enum'
import { DotenvConfig } from './env.config'

const levels ={
    error:0,
    warn:1,
    info:2,
    http:3,
    debug:4,
}

const level=()=>{
    const env = DotenvConfig.NODE_ENV ?? Environment.DEVELOPMENT
    const isDevelopment = env === Environment.DEVELOPMENT
    
  //yedi isDevelopment true vayo vane value debug hunxa
  //yedi isDevelopment false vayo vane value warn hunxa
    return isDevelopment ? 'debug' :'warn'
}
const colors={
    error:'red',
    warn:'yellow',
    info:'green',
    http:'magenta',
    debug:'white',
}
//addColors() is a method provided by winston to define custom colors for log levels
winston.addColors(colors)

//code to configure a custom logging format for winston, combining several
//formatting options to enchance how log messages are displayed
const format = winston.format.combine(
    winston.format.timestamp({format:'YYYY-MM-DD HH:mm:ss:ms'}),
    winston.format.colorize({all:true}),
    winston.format.printf((info)=>`${info.timestamps} ${info.level}:${info.message}`)
)
//configuring where and how log messages should be handled and stored
const transports=[
    //configurs Winston to log messages to the console.
    new winston.transports.Console(),
//configures winson to log messages to a file named error.log located in log
//level: error specifies that only log messages with an error 
//level or higher (error,warn)should be logged to this file
    new winston.transports.File({
        filename:'log/error.log',
        level:'error',
    }),
//configures winston to log all the messages regardless to level to a file
//named all.log located in the 'log' director.(info,warn,error,debug)
new winston.transports.File({filename:'log/all.log'})
]  
export const Logger = winston.createLogger({
    //instead of hardcoding a static logging level, we use a function to 
    //determine the logging level dynamically at runtime.
    level:level(),
    levels,
    format,
    transports
})
