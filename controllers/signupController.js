import { validationResult } from "express-validator";
import asyncWrap from "express-async-handler";
import { createNewUser } from "../db/queries.js";

export const createUserGet = (req, res) =>
  res.render("form", {
    title: "Sign up",
    formType: "signup",
    isLoggedIn: req.isAuthenticated(),
  });

export const createUserPost = asyncWrap(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(302).render("form", {
      title: "Sign up",
      formType: "signup",
      errors: errors.array(),
      isLoggedIn: req.isAuthenticated(),
    });
  }

  await createNewUser(req.body);
  res.redirect("/login");
});
