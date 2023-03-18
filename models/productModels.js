// Importandoo Data Types de Sequelize
import { DataTypes } from "sequelize";
// importando la Base de datos
import db from "../database/db.js";

const productModel = db.define('productos', {
    nombre: { type: DataTypes.STRING, },
    precio: { type: DataTypes.INTEGER, },
    descripcion: { type: DataTypes.STRING, },
    cantidad: { type: DataTypes.INTEGER, },
})

export default productModel;