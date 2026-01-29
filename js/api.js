export async function cargarSesiones() {

    
    try {
const response = await fetch('data/sesiones.json');

const data = await response.json();
return data;

    } catch (error) {
        console.error('Error al cargar las sesiones:', error);
        return [];

}
    
}

