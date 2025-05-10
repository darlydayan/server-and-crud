export const productoController = () => {
  const main = document.getElementById("main");
  main.innerHTML = ""; 

  const contenedor = document.createElement("div");
  contenedor.classList.add("contenedor");

  // ================= FORMULARIO ==================
  const formulario = document.createElement("form");
  formulario.classList.add("formulario");

  const campos = [
    { id: "nombre", label: "Nombre" },
    { id: "descripcion", label: "Descripción" },
    { id: "precio", label: "Precio" },
    { id: "categoria", label: "ID Categoría" }
  ];

  campos.forEach(campo => {
    const campoGrupo = document.createElement("div");
    campoGrupo.classList.add("campo");

    const label = document.createElement("label");
    label.setAttribute("for", campo.id);
    label.textContent = campo.label;

    const input = document.createElement("input");
    input.type = "text";
    input.id = campo.id;
    input.classList.add("input", `input-${campo.id}`);
    input.placeholder = campo.label;

    campoGrupo.append(label, input);
    formulario.appendChild(campoGrupo);
  });

  const btnAgregar = document.createElement("button");
  btnAgregar.type = "submit";
  btnAgregar.textContent = "Añadir producto";
  btnAgregar.classList.add("btn", "btn-agregar");

  formulario.appendChild(btnAgregar);

  // ================ TABLA ===================
  const tablaContainer = document.createElement("div");
  tablaContainer.classList.add("tabla-contenedor");

  const tabla = document.createElement("table");
  tabla.classList.add("tabla");

  const thead = document.createElement("thead");
  const filaHead = document.createElement("tr");

  ["Nombre", "Descripción", "Precio", "Categoría ID", "Acciones"].forEach(titulo => {
    const th = document.createElement("th");
    th.textContent = titulo;
    filaHead.appendChild(th);
  });

  thead.appendChild(filaHead);
  const tbody = document.createElement("tbody");
  tbody.classList.add("tabla-body");

  tabla.append(thead, tbody);
  tablaContainer.appendChild(tabla);

  // ============ Agregar todo al DOM ============
  contenedor.append(formulario, tablaContainer);
  main.appendChild(contenedor);

  const productos = []; // Arreglo para almacenar productos temporalmente

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.querySelector(".input-nombre");
    const descripcion = document.querySelector(".input-descripcion");
    const precio = document.querySelector(".input-precio");
    const categoria = document.querySelector(".input-categoria");

    if (!nombre || !descripcion || !precio || !categoria) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const nuevoProducto = { nombre, descripcion, precio, categoria };
    productos.push(nuevoProducto);
    renderTabla();
    formulario.reset();
  });

  const renderTabla = () => {
    tbody.innerHTML = ""; // Limpia la tabla antes de renderizar

    productos.forEach((producto, index) => {
      const fila = document.createElement("tr");

      // Celdas de datos
      Object.values(producto).forEach(valor => {
        const td = document.createElement("td");
        td.textContent = valor;
        fila.appendChild(td);
      });

      // Acciones (Editar y Eliminar)
      const accionesTd = document.createElement("td");

      const btnEditar = document.createElement("button");
      btnEditar.textContent = "Editar";
      btnEditar.classList.add("btn", "btn-editar");
      btnEditar.addEventListener("click", () =>   (index));

      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Eliminar";
      btnEliminar.classList.add("btn", "btn-eliminar");
      btnEliminar.addEventListener("click", () => {
        productos.splice(index, 1);
        renderTabla();
      });

      accionesTd.append(btnEditar, btnEliminar);
      fila.appendChild(accionesTd);

      tbody.appendChild(fila);
    });
  };

  const editarProducto = (index) => {
    const producto = productos[index];

    document.querySelector(".input-nombre").value = producto.nombre;
    document.querySelector(".input-descripcion").value = producto.descripcion;
    document.querySelector(".input-precio").value = producto.precio;
    document.querySelector(".input-categoria").value = producto.categoria;

    productos.splice(index, 1); // Lo elimina para que se vuelva a guardar con los cambios
  };

};
