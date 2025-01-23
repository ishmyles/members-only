import { Router } from "express";
import {
  authoriseAdminGet,
  authoriseAdminPost,
} from "../controllers/adminController.js";
import { adminSecretValidator } from "../utils/formValidator.js";
import { authRequired } from "../middleware/middleware.js";

const adminRouter = Router();

adminRouter.get("/new", authRequired, authoriseAdminGet);

adminRouter.post(
  "/new",
  authRequired,
  adminSecretValidator,
  authoriseAdminPost
);

export default adminRouter;
