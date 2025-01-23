import { Router } from "express";
import {
  createMessageGet,
  createMessagePost,
  deleteMessagePost,
} from "../controllers/messagesController.js";
import { messageValidator } from "../utils/formValidator.js";

const messagesRouter = Router();

messagesRouter.get("/new", createMessageGet);

messagesRouter.post("/new", messageValidator, createMessagePost);

messagesRouter.post("/delete/:id", deleteMessagePost);

export default messagesRouter;
