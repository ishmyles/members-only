import { Router } from "express";
import {
  authoriseUserGet,
  authoriseUserPost,
} from "../controllers/memberController.js";

const memberRouter = Router();

memberRouter.get("/join", authoriseUserGet);

memberRouter.post("/join", authoriseUserPost);

export default memberRouter;
