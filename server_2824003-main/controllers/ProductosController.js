import Producto from "../models/Producto.js";

class ProductosController{

    //metodos
    //Obtener todos las categorias de la base de datos
   static async getAllProductos(req, res){
        const OBJProductos = new Producto();
        const productos = await OBJProductos.getAll();
       return res.json(productos);
    }

    static async createProductos(req, res){
        const {nombre, descripcion, categoria_id} = req.body;
        const OBJProductos = new Producto();
        const productos = await OBJProductos.create(nombre, descripcion, categoria_id);
       return res.json(productos);
    }
    
    static async updatePartial(req, res) {
        //query params
        const { id } = req.params;
        const campos = req.body;
         const OBJProductos = new Producto();
         const productos = await OBJProductos.updatePartial(id, campos);
         return res.json(productos);
    }
    
    static async deleteProducto(req, res) {
        const { id } = req.params;
        const OBJProductos = new Producto();
        const productos = await OBJProductos.delete(id);
       return res.json(productos);
    }

    
}
export default ProductosController;
