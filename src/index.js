import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { MainRrouter } from "./routes/index.js";
import connectDB from "./config/db.config.js";

const app = express();
const PORT = process.env.PORT || 5000;
const DB_CONNECTION_STRING = process.env.MONGO_LOCAL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", MainRrouter);
// app.use("/api/v2", MainRrouter2);

connectDB(DB_CONNECTION_STRING);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
