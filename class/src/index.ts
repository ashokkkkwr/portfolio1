import 'reflect-metadata'
import mongoose, { StringSchemaDefinition } from 'mongoose';
import { plainToClass,classToPlain } from 'class-transformer';
import {Type,Expose,Exclude} from 'class-transformer'

//defining schema and model
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    }
})
interface IUser extends mongoose.Document{
    name:string,
    email:string;
    age:number;
}
const User = mongoose.model<IUser>('User',userSchema);
class UserDTO{
    @Expose()
    name:string;

    @Expose()
    email:string;

    @Expose()
    age:number;

    constructor(name:string, email:string, age:number){
        this.name = name;
        this.email= email;
        this.age = age;
        
    }

}
async function connectToDatabase(){
mongoose.connect('mongodb://localhost:27017/jvaye',)
.then(()=>{
    console.log('connected')
}).catch((error)=>{
    console.error(error)
})
}
async function createUser(){
    const userDTO = new UserDTO('John Doe','John.deo@email.com',30);
    const plainUser = classToPlain(userDTO);

    const user = new User(plainUser);
    try{
        const savedUser = await user.save();
        console.log("user saved",savedUser);
    }catch(error){
        console.error('Error Saving user:',error)
    }
}

async function run(){
    await connectToDatabase();
    await createUser();
    mongoose.disconnect();
}
run();

