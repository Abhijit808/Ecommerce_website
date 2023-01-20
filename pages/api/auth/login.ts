import type { NextApiRequest, NextApiResponse } from 'next'
import  dbconnect from"../../../utils/connect"
import users from "../../../models/users"
import bcrypt from "bcrypt";
export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    const saltRounds = 10;
    if(!req.body){
        res.send({"error":"invalid req"})
        return 
    }
    const {userName,password}= req.body
    try {
           await dbconnect()
           const user = await users.findOne({userName});
           if(!user){
            res.status(404).send("no user found")
            return
           }
          const {Password,...others} = user._doc
          const compare = await bcrypt.compare(password,Password)
          if(!compare){
           res.status(401).send("invalid credintals")
           return
          }
        res.send(others)
    } 
catch (error) {
    console.log(error);
    res.send(error)
}

}