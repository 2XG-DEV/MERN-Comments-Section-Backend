import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";
connectDB();

import express from "express";

import commentRoutes from "./routes/commentRoutes.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/comments", commentRoutes);
