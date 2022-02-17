import express from "express";
import {
  getCommentById,
  getComments,
  saveComment,
  deleteCommentById,
  updateCommentById,
} from "../controllers/commentController.js";

const router = express.Router();

router.route("/").get(getComments);
router.route("/:id").get(getCommentById);
router.route("/").post(saveComment);
router.route("/:id").delete(deleteCommentById);
router.route("/:id").put(updateCommentById);

export default router;
