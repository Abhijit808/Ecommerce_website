import type { NextApiRequest, NextApiResponse } from 'next'
import  dbconnect from"../../../utils/connect"
import users from "../../../models/users"
import bcrypt from "bcrypt";
export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    const saltRounds = 10;
    const {userName,email,pho,password,confirmPassword} = req.body
    if(!req.body || userName == undefined || email == undefined|| password == undefined || pho == undefined || confirmPassword == undefined){
        res.send({"error":"invalid req"})
        return 
    }
    
    try {
        await dbconnect()
        const Password = await bcrypt.hash(password,saltRounds)
        const Pho = pho.toString()
        const user = await users.create({userName,email,Pho,Password,confirmPassword});
        res.send(user)
} 
catch (error) {
    console.log(error);
    res.send(error)
}

}