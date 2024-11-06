// api/index.js (Entry point)
import express from "express";
import { createServer } from "@vercel/node";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./user"; // Import your user routes

const app = express();
const port = 8000;
const DB_URL =
  "mongodb+srv://riyanghouri:%40Ghourig786@cluster0.5bwyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

connectDB();

export default createServer(app); // Export Express as a Vercel serverless function
