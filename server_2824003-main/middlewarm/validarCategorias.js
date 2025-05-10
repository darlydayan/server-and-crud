const validarDatos = (req, res, next) => {    
    const {nombre, descripcion} = req.body;
    if (!nombre || nombre.trim() == "") {
        return res 
        .status (400),
        res.json({mesaje : "El nombre es obligatorio"});
    }
    if (!descripcion || descripcion.trim() == "") {
        return res 
        .status (400),
        res.json({mesaje : "La descripcion es obligatoriq"});
    }
    console.log("Paso validacion");
    next();
    
}

export default validarDatos;