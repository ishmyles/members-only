import { body } from "express-validator";
import { getUsernameById } from "../db/queries.js";

export const signupValidator = [
  body("username")
    .notEmpty()
    .withMessage("Must enter a username")
    .custom(async (value) => {
      const user = await getUsernameById(value);
      return !user[0] ? Promise.resolve() : Promise.reject();
    })
    .withMessage("Username already taken"),
  body("firstname").notEmpty().withMessage("Must enter first name"),
  body("lastname").notEmpty().withMessage("Must enter last name"),
  body("password").notEmpty().withMessage("Must enter a password"),
  body("passwordconfirm")
    .notEmpty()
    .withMessage("Must confirm a password")
    .custom((value, { req }) => {
      return value !== req.body.password ? false : true;
    })
    .withMessage("Passwords must match"),
];

export const loginValidator = [
  body("username").notEmpty().withMessage("Must enter a username"),
  body("password").notEmpty().withMessage("Must enter a password"),
];

export const messageValidator = [
  body("title").notEmpty().withMessage("Must enter a message title"),
  body("text")
    .notEmpty()
    .withMessage("Must enter a message")
    .isLength({ max: 255 })
    .withMessage("Maximum length of message is 255 characters"),
];

export const memberSecretValidator = [
  body("password")
    .notEmpty()
    .withMessage("Must enter a password")
    .custom((value) => {
      return value === process.env.MEMBER_SECRET ? true : false;
    })
    .withMessage("Wrong password, try again!"),
];

export const adminSecretValidator = [
  body("password")
    .notEmpty()
    .withMessage("Must enter a password")
    .custom((value) => {
      return value === process.env.ADMIN_SECRET ? true : false;
    })
    .withMessage("Wrong password, try again!"),
];
