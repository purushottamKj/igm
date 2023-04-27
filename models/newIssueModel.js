import { Model, DataTypes } from "sequelize";
import sequelize from "../config/dbconfig.js";

class IssueTable extends Model {}

const config = {
  sequelize: sequelize,
  tableName: "IssueTable",
  timestamps: true,
};

IssueTable.init(
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

export default IssueTable;
