import syncModels from "./dbsync.js";
import app from "./server.js";
syncModels();
const port = 5000;

app.listen(port, () => {
  console.log("listening on port  " + port);
});
