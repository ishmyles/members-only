import { validationResult } from "express-validator";

export const authoriseAdminGet = (req, res) =>
  res.render("form", { title: "Admin", formType: "admin" });

export const authoriseAdminPost = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(302)
      .render("form", {
        title: "Admin",
        formType: "admin",
        errors: errors.array(),
      });
  }

  res.send(
    "[POST] Form submitted. TODO: Validate user input & authorise user if input equal secret"
  );
};
