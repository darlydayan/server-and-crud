
import './main.css';
import { router } from './router/router';
const app = document.querySelector("#app");
const header = document.querySelector("#header");
const div = document.createElement("div");
const productos = document.createElement("a");
const categorias = document.createElement("a");
productos.textContent = "Productos";
categorias.textContent = "Categorias";
productos.setAttribute("href", '#productos')
categorias.setAttribute("href", '#categorias')
header.classList.add('container', 'header')
div.classList.add('menu')
productos.classList.add('menu__link')
categorias.classList.add('menu__link')
div.append(productos, categorias);
header.append(div);

window.addEventListener('DOMContentLoaded', () => {
  router(app)
});

window.addEventListener('hashchange', () => {
  router(app)
});

