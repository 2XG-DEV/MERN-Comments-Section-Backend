import mongoose from "mongoose";

const opts = {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};

const replySchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: Object,
    required: true,
  },
  score: {
    type: Number,
    default: 0,
  },
  replyingTo: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const commentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
    score: {
      type: Number,
      default: 0,
    },
    replies: [replySchema],
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
