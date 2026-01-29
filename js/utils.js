export function calcularTotalCarrito(carrito) {
    let total = 0;

    for (const sesion of carrito) {
        total += sesion.precio * (sesion.cantidad || 1);
    }

    return total;
}

export function crearElemento(tag, texto = '', clase = '') {
    const elemento = document.createElement(tag);
    elemento.textContent = texto;

    if (clase) {
        elemento.className = clase;
    }
    return elemento;
}

