import { validationResult } from "express-validator";
import asyncWrap from "express-async-handler";
import {
  createNewMessage,
  deleteMessageById,
  getAllMessages,
} from "../db/queries.js";

export const viewAllMessagesGet = asyncWrap(async (req, res) => {
  const msgsList = await getAllMessages();
  res.render("index", { messages: msgsList });
});

export const createMessageGet = (req, res) =>
  res.render("form", { title: "Add message", formType: "message" });

export const createMessagePost = asyncWrap(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(302).render("form", {
      title: "Add message",
      formType: "message",
      errors: errors.array(),
    });
  }

  const newMsg = {
    title: req.body.title,
    text: req.body.text,
    createdBy: "ishmyles", //TODO: Change this later when doing authentication
  };

  await createNewMessage(newMsg);

  res.redirect("/");
});

export const deleteMessagePost = asyncWrap(async (req, res) => {
  await deleteMessageById(req.params.id);
  res.redirect("/");
});
