import { validationResult } from "express-validator";
import asyncWrap from "express-async-handler";
import {
  createNewMessage,
  deleteMessageById,
  getAllMessages,
} from "../db/queries.js";

export const viewAllMessagesGet = asyncWrap(async (req, res) => {
  let hasAdminPriv = false;
  let hasMemberPriv = false;

  if (req.user) {
    hasAdminPriv = req.user.membertype === 0 ? true : false;
    hasMemberPriv = req.user.membertype === 2 || req.user.membertype === 0;
  }

  const msgsList = await getAllMessages();
  res.render("index", {
    messages: msgsList,
    isLoggedIn: req.isAuthenticated(),
    isAdmin: hasAdminPriv,
    isMember: hasMemberPriv,
  });
});

export const createMessageGet = (req, res) =>
  res.render("form", {
    title: "Add message",
    formType: "message",
    isLoggedIn: req.isAuthenticated(),
  });

export const createMessagePost = asyncWrap(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(302).render("form", {
      title: "Add message",
      formType: "message",
      errors: errors.array(),
      isLoggedIn: req.isAuthenticated(),
    });
  }

  const newMsg = {
    title: req.body.title,
    text: req.body.text,
    createdBy: req.user.username,
  };

  await createNewMessage(newMsg);

  res.redirect("/");
});

export const deleteMessagePost = asyncWrap(async (req, res) => {
  await deleteMessageById(req.params.id);
  res.redirect("/");
});
