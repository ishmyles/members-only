import { Router } from "express";
import {
  createMessageGet,
  createMessagePost,
} from "../controllers/messagesController.js";
import { messageValidator } from "../utils/formValidator.js";

const messagesRouter = Router();

messagesRouter.get("/new", createMessageGet);

messagesRouter.post("/new", messageValidator, createMessagePost);

export default messagesRouter;
