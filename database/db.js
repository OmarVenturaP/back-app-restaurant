import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize ( "heroku_df34eca174bd962" , "bc6a106ec0c444" , "200b416d", {
    host: "us-cdbr-east-06.cleardb.net",
    dialect: 'mysql'
});

export default db;