import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();

import db from "./infrastructure/db.js"; 

// Import Routes
import homeRoute from "./routes/homeRoute.js";
import registerRoute from "./routes/registerRoute.js";
import loginRoute from "./routes/loginRoute.js";
import logoutRoute from "./routes/logoutRoute.js";
import profileRoute from "./routes/profileRoute.js";
import userMnagementRoute from "./routes/userManagementRoute.js";

// Get needed envs
const PORT = process.env.PORT || 8000;

// Get the file and  directory names
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Build express app
const app = express();

// Setup static folder
app.use(express.static(path.join(__dirname, "public")));

// Configure ejs
app.set("view engine", "ejs");
app.set("views", "views");

/* Middlewares */
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cookie parser middleware
app.use(cookieParser());

// Routes
app.use("/", homeRoute);
app.use("/", registerRoute);
app.use("/", loginRoute);
app.use("/", logoutRoute);
app.use("/", profileRoute);
app.use("/", userMnagementRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
