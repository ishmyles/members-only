import { validationResult } from "express-validator";
import asyncWrap from "express-async-handler";
import { updateUserMemberType } from "../db/queries.js";

export const authoriseAdminGet = (req, res) =>
  res.render("form", {
    title: "Admin",
    formType: "admin",
    isLoggedIn: req.isAuthenticated(),
  });

export const authoriseAdminPost = asyncWrap(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(302).render("form", {
      title: "Admin",
      formType: "admin",
      errors: errors.array(),
      isLoggedIn: req.isAuthenticated(),
    });
  }

  await updateUserMemberType(req.user.username, "admin");

  res.redirect("/");
});
