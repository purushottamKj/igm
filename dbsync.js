import sequelize from "./config/dbconfig.js";
const syncModels = () => {
  sequelize
    .sync({ alter: false })
    .then(async () => {
      console.log("db connection successfull");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default syncModels;
