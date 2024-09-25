import express from "express";
import { getProfile } from "../controllers/profileController.js";
import jwtAuthentication from "../middlewares/jwtAuthentication.js";

const router = express.Router();

// Get user profile
router.get("/profile", jwtAuthentication, getProfile);

export default router;
