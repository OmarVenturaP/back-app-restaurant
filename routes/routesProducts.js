import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/productController.js";

const router = express.Router()

// Creando rutas para los endpoints de los usuarios
router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

// Creando rutas para los endpoints de los productos

export default router