import { Sequelize } from "sequelize";

const db = new Sequelize ('db_app_restaurant', 'root', 'Ventura123', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;