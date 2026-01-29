// Clave usada para guardar el carrito en localStorage
const CLAVE = 'miCarrito';

// Obtener el carrito guardado o devolver uno vacío
export function obtenerCarrito() {
    return JSON.parse(localStorage.getItem(CLAVE)) || [];
}

// Guardar el carrito en localStorage
export function guardarCarrito(carrito) {
    localStorage.setItem(CLAVE, JSON.stringify(carrito));
}

// Añadir una sesión al carrito y busca si ya existe para incrementar cantidad
export function añadirElementoCarrito(sesion) {
    const carrito = obtenerCarrito();
    const existe = carrito.find(item => item.id === sesion.id);

    if (existe) {
        existe.cantidad = (existe.cantidad || 1) + 1;
    } else {
        sesion.cantidad = 1;
        carrito.push(sesion);
    }

    guardarCarrito(carrito);
}

// Restar una unidad de una sesión (o eliminarla si llega a 0)
export function decrementarElemento(id) {
    let carrito = obtenerCarrito();
    const elemento = carrito.find(sesion => sesion.id === id);

    if (elemento) {
        elemento.cantidad = (elemento.cantidad || 1) - 1;
        if (elemento.cantidad <= 0) {
            carrito = carrito.filter(sesion => sesion.id !== id);
        }
    }

    guardarCarrito(carrito);
}

// Eliminar completamente una sesión del carrito
export function eliminarElemento(id) {
    const carrito = obtenerCarrito().filter(sesion => sesion.id !== id);
    guardarCarrito(carrito);
}

// Vaciar todo el carrito
export function vaciarCarrito() {
    localStorage.removeItem(CLAVE);
}
