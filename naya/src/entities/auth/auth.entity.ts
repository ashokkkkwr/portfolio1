import {Column,Entity,OneToOne} from 'typeorm'
import {AdminAllowedFeature,Role} from '../../constant/enum'
import Base from '../base.entity'
import { AuthDetails } from './details.entity'

@Entity('auth')
export class Auth extends Base{
    @Column({
        unique:true,
    })
    email:string
    @Column(
        {
            unique:true
        })
        username:string
//SELECT:FALSE option in the '@column' decorator in used to excliude
//the column from the default selection when querring the entity.
    @Column({select:false})
    password:string
    @Column({
        type:'enum',
        enum:Role,  
    })
    role:Role
// type:`enum` specifies that the column type is an enum. Enums 
//are useful for storing predefined sets of values
// array:true: This indicates that the coulmn will store an array 
//of enum values rather than a single emum value
//nullable:true: This allows the column to be null in the database,
@Column({name:'allowed_feature',type:'enum',enum:AdminAllowedFeature,array:true,nullable:true})
allowedFeature:AdminAllowedFeature[]
//cascade:true means changes made to auth entity will be related aauthdetails entity

@OneToOne(()=>AuthDetails,(details)=>details.auth,{cascade:true})
details:AuthDetails
@Column({nullable:true})
token:string
//value default ma false vayera aayera basxa
@Column({name:'otp_verified',default:false})
otpVerified:boolean
}