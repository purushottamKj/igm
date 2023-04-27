import { Sequelize } from "sequelize";

const user = "postgres";
const host = "localhost";
const port = "5432";
const database = "new_igm";
const password = "12345";

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: "postgres",
  logging: false,
});
export default sequelize;
