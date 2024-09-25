import express from "express";
import {
  getRegister,
  postRegister,
} from "../controllers/registerController.js";

const router = express.Router();

// Get register page
router.get("/register", getRegister);

// Post register data
router.post("/register", postRegister);

export default router;
