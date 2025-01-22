import { validationResult } from "express-validator";

export const createMessageGet = (req, res) =>
  res.render("form", { title: "Add message", formType: "message" });

export const createMessagePost = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(302).render("form", {
      title: "Add message",
      formType: "message",
      errors: errors.array(),
    });
  }

  res.send("[POST] Form submitted. TODO: Save input to DB");
};
