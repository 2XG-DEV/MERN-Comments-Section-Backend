import mongoose from "mongoose";
import dotenv from "dotenv";
import { comments } from "./data/comments.js";
import Comment from "./models/commentModel.js";

import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Comment.deleteMany();
    await Comment.insertMany(comments);

    console.log("Data imported");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();
