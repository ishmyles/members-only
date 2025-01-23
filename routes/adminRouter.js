import { Router } from "express";
import {
  authoriseAdminGet,
  authoriseAdminPost,
} from "../controllers/adminController.js";
import { adminSecretValidator } from "../utils/formValidator.js";

// Middleware will run even if the validation fails.
// You will need to add a condition in the middle to stop
// actions such as querying the DB.
import { validationResult } from "express-validator";
const middleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Validation failed");
    return next();
  }
  console.log("WORKS");
  next();
};
// END OF TEST CODE

const adminRouter = Router();

adminRouter.get("/new", authoriseAdminGet);

adminRouter.post("/new", adminSecretValidator, middleware, authoriseAdminPost);

export default adminRouter;
