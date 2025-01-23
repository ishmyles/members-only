import { Router } from "express";
import passport from "passport";
import { loginUserGet, loginUserPost } from "../controllers/loginController.js";
import { loginValidator } from "../utils/formValidator.js";

const loginRouter = Router();

loginRouter.get("/", loginUserGet);

loginRouter.post(
  "/",
  loginValidator,
  loginUserPost,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

export default loginRouter;
