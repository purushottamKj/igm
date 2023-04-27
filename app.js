import syncModels from "./dbsync.js";
import app from "./server.js";
import cors from "cors";
syncModels();

// var corsOptions = {
//   origin: "https://9bad-103-44-53-55.ngrok-free.app",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
const port = 5000;

app.listen(port, () => {
  console.log("listening on port  " + port);
});
// app.use(cors());
