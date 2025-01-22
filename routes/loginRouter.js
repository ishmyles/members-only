import { Router } from "express";
import { loginUserGet, loginUserPost } from "../controllers/loginController.js";

const loginRouter = Router();

loginRouter.get("/", loginUserGet);

loginRouter.post("/", loginUserPost);

export default loginRouter;
