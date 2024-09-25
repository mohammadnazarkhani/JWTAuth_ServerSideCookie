import express from "express";
import {
    getLogin,
    postLogin,
} from "../controllers/loginController.js";

const router = express.Router();

// Get login page
router.get("/login", getLogin);

// Post login data
router.post("/login", postLogin);

export default router;
