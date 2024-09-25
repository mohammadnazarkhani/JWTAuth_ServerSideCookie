import express from "express";
import { getHome } from "../controllers/homeController.js";

const router = express.Router();

// Get home page
router.get("/", getHome);

export default router;