import express, { Router } from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

    const allowedDomains = "http://localhost:3000";
    app.use(
    cors({
        origin: function (origin, callback) {
        if (allowedDomains.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
        },
        methods: "GET, HEAD, PUT,PATCH,POST,DELETE,OPTIONS",
        credentials: true,
    })
    );

app.use("/ondc", router);

export default app;
