import { validationResult } from "express-validator";
import asyncWrap from "express-async-handler";
import { updateUserMemberType } from "../db/queries.js";

export const authoriseUserGet = (req, res) =>
  res.render("form", { title: "Member Entry", formType: "member" });

export const authoriseUserPost = asyncWrap(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(302).render("form", {
      title: "Member Entry",
      formType: "member",
      errors: errors.array(),
    });
  }

  await updateUserMemberType("ishmyles", "member"); //TODO: Change hardcoded value

  res.redirect("/");
});
