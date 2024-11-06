import { Router } from "express";
import User from "../models/UserSchema.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while creating User", error: error.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
});

export default router;
