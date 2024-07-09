import { conexionAPI } from "./conexionAPI.js";

async function eliminarProducto(){
    const productoId = document.querySelector("[data-eliminar").value;
    const producto = await conexionAPI.borrarProducto(productoId);
}

