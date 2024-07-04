import {type Request, type Response } from 'express';
import {Message} from '../constant/messages'
import {StatusCodes} from '../constant/statusCodes';
import { HashService } from '../services/utils/hash.service';


export class AuthController{
    constructor(
        private readonly hashService:HashService = new HashService(),
        private readonly optService: OptService = new OtpService()

    ){}
}
