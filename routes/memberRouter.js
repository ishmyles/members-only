import { Router } from "express";
import {
  authoriseUserGet,
  authoriseUserPost,
} from "../controllers/memberController.js";
import { memberSecretValidator } from "../utils/formValidator.js";

const memberRouter = Router();

memberRouter.get("/join", authoriseUserGet);

memberRouter.post("/join", memberSecretValidator, authoriseUserPost);

export default memberRouter;
