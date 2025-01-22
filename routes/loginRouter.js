import { Router } from "express";
import { loginUserGet, loginUserPost } from "../controllers/loginController.js";
import { loginValidator } from "../utils/formValidator.js";

const loginRouter = Router();

loginRouter.get("/", loginUserGet);

loginRouter.post("/", loginValidator, loginUserPost);

export default loginRouter;
