import crypto from 'crypto'
import {generateHtml} from '../../utils/mail.templete'
import {EmailService} from './email.service'
import{HashService} from './hash.service'

export class OptService{
    constructor(
        private readonly mailService = new EmailService(),
        private readonly hashService = new HashService()

    ){}
    async generateOtp(){
        return crypto.randomInt(10000, 99999)
    }
    verifyOtp(hashedOtp:string, data:any){
        const computedHash = this.hashService.hashopt(data)
        return computedHash === hashedOtp
    }
    async sendPasswordResetOtpMail(data: any) {
        await this.mailService.sendMail({
          to: data?.email,
          text: `Your OTP is ${data?.otp}`,
          subject: 'Password Reset OTP',
          html: generateHtml(`${data?.otp} is your OTP, Valid for 5 minutes. Do not share it with anyone.`),
        })
      }
}