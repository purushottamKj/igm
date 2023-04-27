import { Model, DataTypes } from "sequelize";
import sequelize from "../config/dbconfig.js";

class on_issueTable extends Model {}

const config = {
  sequelize,
  tableName: "on_issueTable",
  timestamps: true,
};

on_issueTable.init(
  {
    context: {
      type: Object,
    },
    message: {
      type: Object,
    },
    status: {
      type: DataTypes.STRING,
    },
    issue_id: {
      type: DataTypes.STRING,
    },
  },
  config
);

export default on_issueTable;
