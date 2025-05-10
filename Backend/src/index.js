import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
const app = express();
dotenv.config();
const port = process.env.PORT;

app.use("/v1/auth", authRoutes);

app.listen(() => {
  console.log(`app is listing to port ${port}`);
  connectDB();
});
