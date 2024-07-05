import {jwtDecode} from 'jwt-decode';
import { AppDataSource } from '../config/database.config';
import {Role} from '../constant/enum'
import {Message} from '../constant/messages'
import {type UpdatePasswordDTO} from '../dto/admin.dto';
import {type ResetPasswordDTO} from '../dto/auth.dto';
import {Auth} from '../entities/auth/auth.entity';
import HttpException from '../utils/HttpException';
import {AuthDetails} from '../entities/auth/details.entity';
import BcryptService from '../utils/bcrypt.service'
import adminService from './admin.service'


class AuthService{
    constructor(
        private readonly authRepo = AppDataSource.getRepository(Auth),
        private readonly authDetialsRepo = AppDataSource.getRepository(AuthDetails),
        private readonly bcryptService = new BcryptService()

    ){}
    async login(data:Auth):Promise<Auth>{
        const admin = await this.authRepo.findOne({
            where:[{username:data.username},{email:data.username}],
            select:['id','username','email','password'],
        })
        if (!admin) throw HttpException.notFound(Message.invalidCredentials)
            const isPasswordMatched = await this.bcryptService.compare(data.password,admin.password)
            if(!isPasswordMatched) throw HttpException.notFound(Message.invalidCredentials)
                return await adminService.getById(admin.id)
        
}
