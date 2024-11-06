import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/UserRoutes.js";
import cors from "cors";
const app = express();
const port = 8000;
// const DB_URL = "mongodb://localhost:27017/riyan";
const DB_URL =
  "mongodb+srv://riyanghouri:%40Ghourig786@cluster0.5bwyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());
app.use(cors());
app.use("/api/user/", userRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

connectDB();

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
