import express, { Router } from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({}));

// app.options("*", cors());

// const whitelist = ["http://localhost:3001"];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
// };
// app.use(cors(corsOptions));

// app.use("/*", function (req, res, next) {
//   res.header(`Access-Control-Allow-Origin`, `http://127.0.0.1:4040`);
//   res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
//   res.header(`Access-Control-Allow-Headers`, `Content-Type`);
//   next();
// });

app.use("/ondc", router);

export default app;
