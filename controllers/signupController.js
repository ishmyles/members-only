import { validationResult } from "express-validator";

export const createUserGet = (req, res) =>
  res.render("form", { title: "Sign up", formType: "signup" });

export const createUserPost = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(302).render("form", {
      title: "Sign up",
      formType: "signup",
      errors: errors.array(),
    });
  }

  res.send("[POST] Form submitted. TODO: Save input to DB");
};
