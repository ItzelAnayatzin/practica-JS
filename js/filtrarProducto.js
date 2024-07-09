import { conexionAPI } from "./conexionAPI.js";
import {crearCard}  from "./mostrarProductos.js";

async function filtrarProducto(evento){

    evento.preventDefault();
    const datosBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await conexionAPI.buscarProducto(datosBusqueda);

    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busqueda.forEach(producto => lista.appendChild(crearCard(producto.nombre,producto.precio,producto.imagen)));

    if(busqueda.length == 0){
        lista.innerHTML = `<h2 class="title">No fueron encontrados elementos con este dato ${datosBusqueda}</h2>`;
    }
    console.log(datosBusqueda);
    console.log(busqueda)
}

const boton = document.querySelector("[data-boton-busqueda]");
boton.addEventListener("click", evento => filtrarProducto(evento));