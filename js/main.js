// Importamos las funciones necesarias
import { cargarSesiones } from './api.js';
import { mostrarSesiones, mostrarCarrito } from './ui.js';
import { crearElemento } from './utils.js';

// Contenedor principal de la app
const app = document.getElementById('app');

// Botón: Ver sesiones
document.getElementById('btn-sesiones').addEventListener('click', async () => {
    const sesiones = await cargarSesiones();
    mostrarSesiones(sesiones, app);
});

// Botón: Ver carrito
document.getElementById('btn-carrito').addEventListener('click', () => {
    mostrarCarrito(app);
});

// Botón: Preferencias (vista simple)
document.getElementById('btn-preferencias').addEventListener('click', () => {
    app.innerHTML = '';

    app.appendChild(crearElemento('h2', 'Preferencias'));

    const btnTema = crearElemento(
        'button',
        document.body.classList.contains('light')
            ? 'Tema: Claro'
            : 'Tema: Oscuro'
    );

   btnTema.addEventListener('click', () => {
    document.body.classList.toggle('light');

    const tema = document.body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('tema', tema);

    btnTema.textContent = tema === 'light' ? 'Tema: Claro' : 'Tema: Oscuro';
});


    app.appendChild(btnTema);
});

if (localStorage.getItem('tema') === 'light') {
    document.body.classList.add('light');
}


