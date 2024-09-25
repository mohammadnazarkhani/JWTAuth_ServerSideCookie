import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Get needed envs
const dbPort = parseInt(process.env.DB_PORT) || 27017;
const dbName = process.env.DB_NAME || "JwtAuth";

mongoose
  .connect(`mongodb://localhost:${dbPort}/${dbName}`)
  .then(() => console.log(`Connected to the database: ${dbName}`))
  .catch((error) => console.error(`Database Connection Error: ${error}`));

const db = mongoose;

export default db;
