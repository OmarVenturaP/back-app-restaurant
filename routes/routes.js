import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser, deleteUser } from "../controllers/userController";

const router = express.Router()

// Creando rutas para los endpoints
router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router