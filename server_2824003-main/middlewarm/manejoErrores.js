export const errorTrue = (id) => ({
    error: true,
    message: `No se pudo realizar ninguna accion correspondiente a la informacion del id = ${id}`
});

export const errorFalse = (id, datos) => ({
    error: false,
    message: `Se realizo la accion correspondiente a la informacion del id = ${id}`,
    data: datos
});