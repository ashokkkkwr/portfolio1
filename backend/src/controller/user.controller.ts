import express from 'express'
const router = express.Router()
import User from '../model/user.model'
import jwt from 'jsonwebtoken';
import { json } from 'body-parser';

const generateToken=(userId:string, role:string)=>{
    const token = jwt.sign({userId,role},'your_secret_key',{expiresIn:'1h'});
    return token;
}

function isStrongPassword(password: string):boolean{
    const minLength = 8;//yesle boolean return gardaina
    const hasUppercase = /[A-Z]/.test(password);//.test()method is used with regular expressions to check if a string matches a certain pattern. It returns true if the pattern is found in the string and false otherwise.
    const hasLowercase =/[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const specialCharacters = /[!@#$%^&*().?"|<>]/.test(password);
    return password.length >=minLength && hasUppercase && hasLowercase && hasDigit &&specialCharacters
}
async function doesEmailExist (email:string):Promise<boolean>{
    const user = await User.findOne({email});
    return user !==null;
}
router.post('/register',async (req,res)=>{
    try{
    const {email,password,role}=req.body;
    if(await doesEmailExist(email)){
        return res.status(400).json({message:'Email already exists'})
    }
    if(!email){
        return res.status(400).json('please enter email')
    }
    if(!password){
        return res.status(400).json('please enter password')
    }
    if(!email.includes('@') || !email.includes('.com')){
        return res.status(400).json('invalid email format');
    }
    if(!password){
        return res.status(400).json('please enter a password')
    }
    if(!isStrongPassword(password)){
        return res.status(400).json('password is not strong enough')
    }
    const newUser = new User({email,password,role});//create new user instance
    await newUser.save()//saves to databsae
    return res.status(201).json(newUser)
    }catch(error){
        console.log(error)
        res.status(500).send('error registering the user')
    }
  
});
router.post('/login',async(req,res)=>{
    const {email,password,role}=req.body;
    try{
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json('user not found')
        }
        const dbPassword = user.password
        if(password != dbPassword){
            return res.status(404).json('password did not matched')
        }  
        const token = generateToken(user.id,user.role||'user')   
        res.status(200).json({userId:user._id, token})

    }catch(error){
        
    }
    
})
export default router;
