import { loadView } from "../helpers/loadView.js";
import { categoriaController } from "../views/categorias/categoriaController.js";
import { productoController } from "../views/productos/productoController.js";

const routes = {
  productos: {
    "template": "productosController/index.html",
    controlador: productoController
  },
  categorias: {
    "template": "categoriaController/index.html", // Corregí el nombre del archivo
    controlador: categoriaController
  }
};

export const router = (app) => {
  const hash = location.hash.slice(1);
  const { template, controlador } = matchRoute(hash);
  // Llamando la vista
  loadView(app, template);
  // Ejecutar el controlador si existe
  if (controlador) {
    controlador();
  }
};

const matchRoute = (hash) => {
  for (const route in routes) {
    if (route === hash) {
      return routes[route];
    }
  }
  // Si no hay coincidencia, puedes devolver una vista por defecto o mostrar un error
  return { template: "error.html", controlador: null }; // Error si no coincide
};
