import express, { Response, response } from "express";
const router = express.Router();
import cookie, { serialize } from "cookie";

import { DashBoard, Jtoken } from "../controllers/User";

router.get("/dashboard", DashBoard);
router.post("/jtoken", Jtoken);
router.get("/cookie", (_ ,res: Response) => {
    // const seralized = serialize("Jtoken", "pratik")
    // // var Cookies = cookie.serialize('Jtoken', "myNameisPratii");

    // const respon = {
    //     message: "authenticated",
    // }
    // return new Response(JSON.stringify(respon),{
    //     status: 200,
    //     headers: {"Set-Cookie": seralized},
    // });

    res.cookie("Jtoken", "Praikt")

    return res.send("OKOK0");
});

export { router as UserRoute}