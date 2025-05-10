const validarDatos = (req, res, next) => {    
    const {nombre, descripcion, categoria_id} = req.body;
    if (!nombre || nombre.trim() == "") {
        return res 
        .status (400),
        res.json({mesaje : "El nombre es obligatorio"});
    }
    if (!descripcion || descripcion.trim() == "") {
        return res 
        .status (400),
        res.json({mesaje : "La descripcion es obligatoria"});
    }

    if (!categoria_id || categoria_id.trim() == "") {
        return res 
        .status (400),
        res.json({mesaje : "La categoria_id es obligatoria"});
    }
    console.log("Paso validacion");
    next();
    
}

export default validarDatos;