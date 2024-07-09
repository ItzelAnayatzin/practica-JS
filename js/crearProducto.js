import {conexionAPI} from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");
const limpiarFormBoton = document.querySelector("[data-limpiar-form]");

async function crearProducto(evento){
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try {
    await conexionAPI.enviarProducto(nombre, precio, imagen);
    }catch(e){
        alert(e);
    }
}

formulario.addEventListener("submit", evento => crearProducto(evento));

function limpiarForm(){
    const elementosFormulario = formulario.querySelectorAll("input");
    elementosFormulario.forEach(element => {element.value = ""})
}

limpiarFormBoton.addEventListener("click", limpiarForm);
