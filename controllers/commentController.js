import Comment from "../models/commentModel.js";

import expressAsyncHandler from "express-async-handler";

const getComments = expressAsyncHandler(async (req, res) => {
  const comments = await Comment.find({});

  res.json(comments);
});

const getCommentById = expressAsyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404);
    throw new Error("Comment not found");
  }
});

const saveComment = expressAsyncHandler(async (req, res) => {
  const toAdd = new Comment(req.body);
  try {
    await toAdd.save();
    res.json(toAdd);
  } catch (error) {
    res.status(400);
    throw new Error("Error Occured");
  }
});

const deleteCommentById = expressAsyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  if (comment) {
    comment.delete();
    res.json(comment);
  } else {
    res.status(404);
    console.log("error");
    throw new Error("Comment not found");
  }
});

const updateCommentById = expressAsyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  if (comment) {
    comment.user = req.body.user || comment.user;
    comment.content = req.body.content || comment.content;
    comment.score = req.body.score || comment.score;
    comment.replies = req.body.replies || comment.replies;
    comment.save();
    res.json(comment);
  } else {
    res.status(404);
    throw new Error("Comment not Found");
  }
});

export {
  getComments,
  getCommentById,
  saveComment,
  deleteCommentById,
  updateCommentById,
};
