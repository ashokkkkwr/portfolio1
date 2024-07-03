import morgan,{type StreamOptions} from 'morgan'
import {DotenvConfig}from '../config/env.config'
import {Logger} from '../config/logger.config'
import {Environment} from '../constant/enum'
//This code is a way to send log messages from one logging system like 
//morgan to another logging system like winston 
const stream: StreamOptions = {
// stream object has a method `write ` method that takes a log message as a string
// when the `write` method is called with a `message`, it sends this message
// to winston's logger using `Logger.http`
    write:(message:string) => Logger.http(message),
}
// if not in environment= development it will skip
const skip =():boolean =>{
    const env=DotenvConfig.NODE_ENV ?? Environment.DEVELOPMENT
    return env !==Environment.DEVELOPMENT
}
export const morganMiddleware = morgan(':method :url :status :res[content-length] - :response-time ms',{
    stream,
    skip
})
