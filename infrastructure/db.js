import mongoose, { mongo } from "mongoose";

// Get needed envs
const dbInstanceName = process.env.DB_INSTANCE_NAME || "mongodb";
const dbPort = parseInt(process.env.DB_PORT) || 27017;
const dbName = process.env.DB_NAME || "myDatabase";

mongoose
  .connect(`${dbInstanceName}://localhost:${dbPort}/${dbName}`)
  .then(() =>
    console.log(`Connected to the database: ${dbInstanceName}:${dbName}`)
  )
  .catch((error) => console.error(`DatabaseConnection Error: ${error}`));

export const db = mongoose;
