import { validationResult } from "express-validator";
import asyncWrap from "express-async-handler";
import { updateUserMemberType } from "../db/queries.js";

export const authoriseAdminGet = (req, res) =>
  res.render("form", { title: "Admin", formType: "admin" });

export const authoriseAdminPost = asyncWrap(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(302).render("form", {
      title: "Admin",
      formType: "admin",
      errors: errors.array(),
    });
  }

  await updateUserMemberType("ishmyles", "admin"); //TODO: Change hardcoded value

  res.redirect("/");
});
