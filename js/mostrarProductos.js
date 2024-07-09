import { conexionAPI } from "./conexionAPI.js";

const listarProductos = document.querySelector("[data-lista]");

export function crearCard(nombre, precio, imagen,id) {
    const producto = document.createElement("li");
    producto.className = "lista__item";
    producto.innerHTML = `<img src="${imagen}"
    class="card__img" alt="">
<h5 class="card__title">${nombre}</h5>
<div class="description">
    <p>$ ${precio} </p>
    <button class="eliminar" data-id="${id}"><img src="./img/delete_icon.png" class="icon" alt="icono"></button></div>`;

    return producto;
}

async function cargarProducto() {
    try {
        const productosAPI = await conexionAPI.listarProductos();
        productosAPI.forEach(producto => listarProductos.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen, producto.id)));

    } catch {
        listarProductos.innerHTML = `<h2 class="title">Ha ocurrido un problema con el servidor</h2>`;
    }
}

cargarProducto()

listarProductos.addEventListener("click", async(evento) => {
    if(evento.target.classList.contains("eliminar")){
        const id = evento.target.dataset.id;
        console.log("Id:", id);
        try {
            await conexionAPI.borrarProducto(id);
            evento.target.closest('.lista__item').remove();
        }catch (error){
            console.error(error)
            alert("Error al intentar eliminar el producto.");
        }

    }
});