
 const Header = () =>{

    
    const divmain = document.querySelector('#app');
    const body = document.querySelector('body');
    
    const header = document.createElement('header');
    const divHeader = document.createElement('div');
    const producto = document.createElement('a');
    const categoria = document.createElement("a");
    
    header.classList.add('container-header');
    divHeader.classList.add('container-a');
    producto.classList.add('a-link-producto');
    categoria.classList.add('a-link-categoria');
    
    
    producto.setAttribute("href", "#Productos");
    categoria.setAttribute("href", "#Categoria");
    
    
    producto.textContent = "Productos"; 
    categoria.textContent = "Categoria";
    
    divHeader.append(producto, categoria);
    header.append(divHeader);
    divmain.append(header);
}

export default Header;

