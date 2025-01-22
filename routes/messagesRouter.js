import { Router } from "express";
import {
  createMessageGet,
  createMessagePost,
} from "../controllers/messagesController.js";

const messagesRouter = Router();

messagesRouter.get("/new", createMessageGet);

messagesRouter.post("/new", createMessagePost);

export default messagesRouter;
