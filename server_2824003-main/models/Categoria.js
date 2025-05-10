import { errorFalse, errorTrue } from "../middlewarm/manejoErrores.js";
import connection from "../utils/db.js";


class Categoria{
    constructor(){      
    }

    async getAll(){
        try {
            const [rows] = await connection.query("select * from categorias;");
            return rows;
        } catch (error) {
            throw new Error("Error al obtener las categorias");
        }        
    }

    async create(nombre, descripcion){
        const [result] = await connection.query("insert into categorias(nombre, descripcion) value (?,?) ", [nombre, descripcion]);

        return {
            id: result.insertId,
            nombre, 
            descripcion
        }
    }

    async delete(id) {
        try {
            const [datos] = await this.getById(id)
            
            if (!datos) {
                return errorTrue(id);
            }
            // consulto productos relacionados
            const tieneProductosRelacionados = await this.relacionProductos(datos.id);
            
            // consulta si tiene productos relacionados
            if (tieneProductosRelacionados.length > 0) {        
                return errorTrue(id);
            }
     
             // si no tiene se elimina 
            const [eliminado] = await connection.query(`delete from categorias where id = ${id}`);
     
                if (eliminado.affectedRows > 0) {
                    return errorFalse(id, datos);
                }else {
                    return errorTrue(id);
                }
            
        } catch (error) {
            throw new Error("Error al obtener las categorias");
        }
    }

    async updatePartial(id,campos) {
        let query  = "UPDATE categorias SET ";
        let params = [];
        // contruimos de forma dinamica la consulta para acceder a todos los campos que llegan de la tabla categorias 
        for (const [key, value] of (Object.entries(campos))) {
            query += `${key} = ?, `;
            params.push(value);
        }

        query = query.slice(0, -2);
        query += " WHERE id = ?";   
        params.push(id)    
        console.log(query , params);
         
        try {
            const [result]  = await connection.query(query, params);
            if (result.affectedRows === 0) {
                return errorTrue(id);
            }   
            
            return errorFalse(id, result);
        } catch (error) {
            throw new Error("Error al Actualizar las categorias");
        }
    
    }

    async relacionProductos(categoria_id) {
        try {
            const [rows] = await connection.query(`select * from productos where categoria_id = ${categoria_id} `);
            console.log(rows);
            return rows;
        } catch (error) {
            throw new Error("Error al obtener las categorias");
        }        
    }

    async getById(id){
        const [consulta] = await connection.query(`select * from categorias where id = ${id}`);  
        
        // if (!consulta || consulta.length === 0) {
        //     console.log('No se encontraron resultados para el id:', id);
        //     return null;
        // }
        
        return consulta;
    }
}
export default Categoria;