import { validationResult } from "express-validator";
import asyncWrap from "express-async-handler";

export const loginUserGet = (req, res) =>
  res.render("form", { title: "Login", formType: "login" });

export const loginUserPost = asyncWrap((req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(302).render("form", {
      title: "Login",
      formType: "login",
      errors: errors.array(),
    });
  }
  res.send("[POST] Login user. TODO: Authenticate user session.");
});
