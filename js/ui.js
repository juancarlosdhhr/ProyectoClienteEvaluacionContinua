// Funciones del carrito
import {
    añadirElementoCarrito,
    obtenerCarrito,
    eliminarElemento,
    decrementarElemento,
    vaciarCarrito
} from './carrito.js';

// Funciones auxiliares
import { calcularTotalCarrito, crearElemento } from './utils.js';

// Mostrar sesiones disponibles
export function mostrarSesiones(sesiones, contenedor) {
    contenedor.innerHTML = '';
    contenedor.appendChild(crearElemento('h2', 'Sesiones Disponibles'));

    sesiones.forEach(sesion => {
        const card = crearElemento('div', '', 'card');

        card.appendChild(crearElemento('h3', sesion.nombre));
        card.appendChild(crearElemento('p', `Precio: ${sesion.precio} €`));

        const btn = crearElemento('button', 'Añadir al carrito');
        btn.addEventListener('click', () => {
            añadirElementoCarrito(sesion);
        });

        card.appendChild(btn);
        contenedor.appendChild(card);
    });
}

// Mostrar carrito
export function mostrarCarrito(contenedor) {
    const carrito = obtenerCarrito();
    contenedor.innerHTML = '';
    contenedor.appendChild(crearElemento('h2', 'Carrito'));

    if (carrito.length === 0) {
        contenedor.appendChild(crearElemento('p', 'El carrito está vacío'));
        return;
    }

    carrito.forEach(sesion => {
        contenedor.appendChild(
            crearElemento(
                'p',
                `${sesion.nombre} x${sesion.cantidad} - ${sesion.precio * sesion.cantidad} €`
            )
        );

        const controles = crearElemento('div');

        const btnMenos = crearElemento('button', '-');
        btnMenos.addEventListener('click', () => {
            decrementarElemento(sesion.id);
            mostrarCarrito(contenedor);
        });

        const btnEliminar = crearElemento('button', 'Eliminar');
        btnEliminar.addEventListener('click', () => {
            eliminarElemento(sesion.id);
            mostrarCarrito(contenedor);
        });

        const btnMas = crearElemento('button', '+');
        btnMas.addEventListener('click', () => {
            añadirElementoCarrito(sesion);
            mostrarCarrito(contenedor);
        });

        controles.append(btnMenos, btnEliminar, btnMas);
        contenedor.appendChild(controles);
    });

    const total = calcularTotalCarrito(carrito);
    contenedor.appendChild(crearElemento('p', `Total: ${total} €`));

    const btnVaciar = crearElemento('button', 'Vaciar carrito');
    btnVaciar.addEventListener('click', () => {
        vaciarCarrito();
        mostrarCarrito(contenedor);
    });

    contenedor.appendChild(btnVaciar);
}
