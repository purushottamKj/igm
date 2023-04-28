import express, { Router } from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/ondc", router);

export default app;
