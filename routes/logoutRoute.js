import express from "express";
import jwtAuthentication from "../middlewares/jwtAuthentication.js";
import { postLogout } from "../controllers/logoutController.js";

const router = express.Router();

// Logout from website
router.post("/logout", jwtAuthentication, postLogout);

export default router;
