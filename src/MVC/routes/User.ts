import express from "express";
const router = express.Router();

import { DashBoard, Jtoken } from "../controllers/User";

router.get("/dashboard", DashBoard);
router.post("/jtoken", Jtoken);

export { router as UserRoute}