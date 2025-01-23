import { validationResult } from "express-validator";
import asyncWrap from "express-async-handler";

export const loginUserGet = (req, res) =>
  res.render("form", {
    title: "Login",
    formType: "login",
    isLoggedIn: req.isAuthenticated(),
  });

export const loginUserPost = asyncWrap((req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(302).render("form", {
      title: "Login",
      formType: "login",
      errors: errors.array(),
      isLoggedIn: req.isAuthenticated(),
    });
  }
  next();
});
