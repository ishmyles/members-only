import { Router } from "express";
import {
  createUserGet,
  createUserPost,
} from "../controllers/signupController.js";

const signupRouter = Router();

signupRouter.get("/", createUserGet);

signupRouter.post("/", createUserPost);

export default signupRouter;
