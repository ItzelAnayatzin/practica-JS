async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

async function enviarProducto(nombre, precio, imagen) {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    })
    const conexionConvertida = conexion.json();

    if (!conexionConvertida.ok) {
        throw new Error("Ha ocurrido un error al enviar el producto");
    }

    return conexionConvertida;
}

async function buscarProducto(palabra) {
    const conexion = await fetch(`http://localhost:3001/productos?q=${palabra}`);
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

async function borrarProducto(id) {
    try {
        const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
            method: "DELETE",
        });
        if (!conexion.ok) {
            throw new Error("Se ha producido un error")
        }
        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (e) {
        alert(e.message);
    }

}

export const conexionAPI = {
    listarProductos, enviarProducto, buscarProducto,borrarProducto
}

