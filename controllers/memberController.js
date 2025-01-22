import { validationResult } from "express-validator";

export const authoriseUserGet = (req, res) =>
  res.render("form", { title: "Member Entry", formType: "member" });

export const authoriseUserPost = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(302).render("form", {
      title: "Member Entry",
      formType: "member",
      errors: errors.array(),
    });
  }

  res.send(
    "[POST] Form submitted. TODO: Validate user input & authorise user if input equal secret"
  );
};
