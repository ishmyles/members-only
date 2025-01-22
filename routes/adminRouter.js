import { Router } from "express";
import {
  authoriseAdminGet,
  authoriseAdminPost,
} from "../controllers/adminController.js";

const adminRouter = Router();

adminRouter.get("/new", authoriseAdminGet);

adminRouter.post("/new", authoriseAdminPost);

export default adminRouter;
