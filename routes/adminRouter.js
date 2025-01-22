import { Router } from "express";
import {
  authoriseAdminGet,
  authoriseAdminPost,
} from "../controllers/adminController.js";
import { adminSecretValidator } from "../utils/formValidator.js";

const adminRouter = Router();

adminRouter.get("/new", authoriseAdminGet);

adminRouter.post("/new", adminSecretValidator, authoriseAdminPost);

export default adminRouter;
