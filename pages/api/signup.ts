import type { NextApiRequest, NextApiResponse } from 'next'
import  dbconnect from"../../utils/connect"
import users from "../../models/users"
import bcrypt from "bcrypt";
export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    const saltRounds = 10;
    console.log(req.body)
    if(!req.body){
        res.send({"error":"invalid req"})
        return 
    }
    const {userName,email,pho,password,confirmPassword} = req.body
    try {
        const Password = await bcrypt.hash(password,saltRounds)
        console.log(Password);
        const Pho = pho.toString() 
        await dbconnect()
        const user = await users.create({userName,email,Pho,Password,confirmPassword});
        res.send("user created")
} 
catch (error) {
    console.log(error);
    res.send(error)
}
//  console.log(Password);
 
//  res.status(200)
//  res.send("message recived")
}