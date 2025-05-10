import express from 'express';
import ProductosController from '../controllers/ProductosController.js';
import validarDatos from '../middlewarm/validarProductos.js';

ProductosController
const productosRoutes = express();

productosRoutes.get('/' , ProductosController.getAllProductos);

productosRoutes.post('/', validarDatos ,  ProductosController.createProductos);

productosRoutes.put('/:id', validarDatos,ProductosController.updatePartial)

productosRoutes.patch('/:id', validarDatos,ProductosController.updatePartial)

productosRoutes.delete("/:id", ProductosController.deleteProducto);

export default productosRoutes;

