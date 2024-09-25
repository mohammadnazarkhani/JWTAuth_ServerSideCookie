import express from "express";
import { getUserMangement } from "../controllers/userMangementController.js";
import jwtAuthentication from "../middlewares/jwtAuthentication.js";
import jwtAuthorization from "../middlewares/jwtAuthorization.js";

const router = express.Router();

// Get usermanagement page
router.get(
  "/usermanagement",
  jwtAuthentication,
  jwtAuthorization,
  getUserMangement
);

export default router;
