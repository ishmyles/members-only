import { Router } from "express";
import {
  createMessageGet,
  createMessagePost,
  deleteMessagePost,
} from "../controllers/messagesController.js";
import { messageValidator } from "../utils/formValidator.js";
import { authRequired } from "../middleware/middleware.js";

const messagesRouter = Router();

messagesRouter.get("/new", authRequired, createMessageGet);

messagesRouter.post("/new", authRequired, messageValidator, createMessagePost);

messagesRouter.post("/delete/:id", deleteMessagePost);

export default messagesRouter;
