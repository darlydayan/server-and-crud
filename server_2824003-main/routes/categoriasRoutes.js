import express from 'express';
import CategoriasController from '../controllers/CategoriaController.js';
import validarDatos from '../middlewarm/validarCategorias.js';

const categoriasRouters = express();

categoriasRouters.get('/' , CategoriasController.getAllCategorias);

categoriasRouters.post('/' , validarDatos,  CategoriasController.createCategoria);

categoriasRouters.put('/:id', validarDatos, CategoriasController.updatePartial)

categoriasRouters.patch('/:id', validarDatos, CategoriasController.updatePartial)

categoriasRouters.delete("/:id", CategoriasController.deleteCategoria);


export default categoriasRouters;

