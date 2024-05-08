import { Sequelize } from "sequelize";
import db from "../config/Database.js"; //mengambil koneksi database

const { DataTypes } = Sequelize;

const Books = db.define(
  "books",
  {
    author: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Books;

// if books table doesn't exist on database
(async () => {
  await db.sync();
})();
