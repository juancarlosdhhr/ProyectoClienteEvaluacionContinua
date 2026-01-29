# ProyectoClienteEvaluacionContinua

Sueños Valenti – Portal de Sesiones Interactivas

Descripción

Portal web que permite:

- Ver sesiones desde un JSON local.

- Añadir y gestionar un carrito espiritual con localStorage.

- Cambiar entre tema claro y oscuro.

- Interactuar dinámicamente sin recargar la página.

Estructura del proyecto
index.html
css/style.css
js/
 ├─ main.js
 ├─ ui.js
 ├─ carrito.js
 ├─ api.js
 └─ utils.js
data/sesiones.json

Funcionalidades

- Ver sesiones: listado dinámico con nombre, precio y botón “Añadir al Carrito”.

- Carrito: añadir, eliminar, vaciar y mostrar total; persistente en localStorage.

- Preferencias: cambiar tema claro/oscuro y mantener la elección entre sesiones.

Tecnologías

- HTML5, CSS3, JavaScript ES6+

- Módulos (import/export)

- Fetch API

- LocalStorage y DOM dinámico

Cómo usar

- Abrir index.html con Live Server o cualquier servidor local.

- Navegar con los botones:

Ver Sesiones

Carrito

Preferencias (tema claro/oscuro)

JSON de ejemplo (data/sesiones.json)
[
  { "id": 1, "nombre": "Viaje al Ser Interno", "precio": 105 },
  { "id": 2, "nombre": "Meditación del Despertar", "precio": 200 },
  { "id": 3, "nombre": "Conexión SupraConsciente", "precio": 205 },
  { "id": 4, "nombre": "Meditación del Dormir", "precio": 500 }
]