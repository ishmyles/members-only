import { Router } from "express";
import {
  createUserGet,
  createUserPost,
} from "../controllers/signupController.js";
import { signupValidator } from "../utils/formValidator.js";

const signupRouter = Router();

signupRouter.get("/", createUserGet);

signupRouter.post("/", signupValidator, createUserPost);

export default signupRouter;
