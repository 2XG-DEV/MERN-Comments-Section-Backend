import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";
connectDB();

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  // intercept OPTIONS method
  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
};

import express from "express";

import commentRoutes from "./routes/commentRoutes.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(allowCrossDomain);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/comments", commentRoutes);
