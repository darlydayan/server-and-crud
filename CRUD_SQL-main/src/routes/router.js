
import { loadView } from "../helpers/loadView.js";
import { categoriaController } from "../views/categoria/categoriacontroller.js";
import { inicioController } from "../views/inicio/inicioControlador.js";
import { productoController } from "../views/producto/productoController.js";


const routes = {
    inicio: {
      "template": "inicio/index.html",
      controlador: inicioController
    },
  productos: {
    "template": "producto/index.html",
    controlador: productoController
  },
  categorias: {
    "template": "categoria/index.html",
    controlador: categoriaController
  }

};


export const router = async (app) => {
    const hash = location.hash.slice(1);
    const { template, controlador } = matchRoute(hash) || {};
  
    if (template && controlador) {
      await loadView(app, template); // Usa el template definido en routes
      controlador(); // Llama al controlador después de que la vista esté cargada
    }
  };
  
  
const matchRoute = (hash) => {
  for (const route in routes) {
    if (route === hash) {
      return routes[route];
    }
  }
} 
