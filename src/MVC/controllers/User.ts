import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import cookie from "cookie";

export const DashBoard = (req: Request , res: Response ) => {
    

    return res.send("DashBoard Done");
}

type Userdto = {
    email: string;
    password: string;
}

export const Jtoken = (req: Request<{},{},Userdto>, res: Response) => {
    const { email, password } = req.body;
        
    const token = sign(
        email,
        "OKgoogle",
    )
    
     
    // res.cookie("jToken",token)
    var Cookies = cookie.serialize('Jtoken', token);
    return res.send(Cookies)
    // if ()
}