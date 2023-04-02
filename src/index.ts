import express, { Request, Response } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { imageRoute } from "./routes/imageRoute";
// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();
app.use("/", imageRoute);
const PORT = process.env.PORT;

console.log("port", PORT);

app.use(morgan("dev"));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
