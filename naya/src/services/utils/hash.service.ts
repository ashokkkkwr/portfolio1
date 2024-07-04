/** crypto provides cryptographic functionality which includes hash functions
 * like HMAC(Hash-based Message Authentication Code)
 */
import crypto from 'crypto'
import { DotenvConfig } from '../../config/env.config'
export class HashService{
    //method name hashopt
    hashopt(data:string){
        /**crypto.createHmac('sha256',DotenvConfig.OPT_SECRET) creates a HMAC
         * object using the SHA-256 algorithm and the `OTP_SECRET`
         * .update(data):Updates the Hmac with the data to be hashed
         *  digest('hex'):produces the hashed value in hexadeimal format
         */
        return crypto.createHmac('sha256',DotenvConfig.OTP_SECRET).update(data).digest('hex')
    }
}