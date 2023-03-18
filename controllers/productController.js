// importando el modelo para los productos en la base de datos
import productModel from "../models/productModels";

//* Definiendo métodos para el CRUD */
// GET ALL
export const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.findAll();
        res.json(products);
    } catch (error) {
        res.json({ message: error.message });
    }
};
// GET
export const getProduct = async (req, res) => {
    try {
        const product = await productModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(product)
    } catch (error) {
        res.json({ message: error.message });
    }
};
// POST
export const createProduct = async (req, res) => {
    try {
        await productModel.create(req.body);
        res.json({
            'message:': 'Producto creado con exito'
        })
    } catch (error) {
        res.json({ message: error.message });
    }
}
// PUT
export const updateProduct = async (req, res) => {
    try {
        await productModel.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            'message': 'Producto actualizado con exito'
        })
    } catch (error) {
        res.json({ message: error.message });
    }
};
// DELETE
export const deleteProduct = async (req, res) => {
    try {
        await productModel.destroy({
            where: {
                id: req.params.id
            }
        })
    } catch (error) {
        res.json({ message: error.message });
    }
};