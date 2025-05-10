
import './style.css';
import { router } from './routes/router';
const app = document.querySelector("#app");
const header = document.querySelector("#header");
const div = document.createElement("div");
const inicio = document.createElement("a");
const productos = document.createElement("a");
const categorias = document.createElement("a");

inicio.textContent = "Inicio";
productos.textContent = "Productos";
categorias.textContent = "Categorias";

inicio.setAttribute("href", '#inicio');
productos.setAttribute("href", '#productos');
categorias.setAttribute("href", '#categorias');

header.classList.add('container', 'header');
div.classList.add('menu');

inicio.classList.add('menu__link');
productos.classList.add('menu__link');
categorias.classList.add('menu__link');

div.append(inicio, productos, categorias);
header.append(div);

window.addEventListener('hashchange', () => {
  router(app)
});
window.addEventListener('DOMContentLoaded', () => {
  router(app)
});