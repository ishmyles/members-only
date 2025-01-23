import { Router } from "express";
import {
  authoriseUserGet,
  authoriseUserPost,
} from "../controllers/memberController.js";
import { memberSecretValidator } from "../utils/formValidator.js";
import { authRequired } from "../middleware/middleware.js";

const memberRouter = Router();

memberRouter.get("/join", authRequired, authoriseUserGet);

memberRouter.post(
  "/join",
  authRequired,
  memberSecretValidator,
  authoriseUserPost
);

export default memberRouter;
