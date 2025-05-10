export const categoriaController = async () => {

  const respuesta = await fetch("http://localhost:5176");

  const datos = await respuesta.json();

  console.log(datos.data);
  
}

