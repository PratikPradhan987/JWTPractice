import express from "express";
const router = express.Router();

import { DashBoard } from "../controllers/User";

router.get("/dashboard", DashBoard);

export { router as UserRoute}