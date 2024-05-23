// Define la clase Piso
class Piso {
    constructor(id, nombre, operacion, municipio, tipo, numHabitaciones, numBanos, precio, distrito, superficie, estado, descripcion, fotos) {
        this.id = id;
        this.nombre = nombre;
        this.operacion = operacion;
        this.municipio = municipio;
        this.tipo = tipo;
        this.numHabitaciones = numHabitaciones;
        this.numBanos = numBanos;
        this.precio = precio;
        this.distrito = distrito;
        this.superficie = superficie;
        this.estado = estado;
        this.descripcion = descripcion;
    }
}

// Array de objetos que representan los diferentes pisos (Ejemplo)
const pisos = [
    new Piso(1, "Piso en el Centro", "Compra", "Málaga Capital", "Piso", 3, 2, 180000, "Centro Histórico", 110, "Excelente estado", "Acogedor piso en el corazón de Málaga, cerca de todos los servicios y transporte público.", 6),
    new Piso(2, "Apartamento Playa", "Alquiler", "Torremolinos", "Apartamento", 2, 1, 900, "Playamar", 80, "Buen estado", "Moderno apartamento a solo unos pasos de la playa, con vistas al mar y terraza.", 6),
    new Piso(3, "Casa Adosada", "Compra", "Benalmádena", "Casa", 4, 3, 280000, "Arroyo de la Miel", 150, "Buen estado", "Espaciosa casa adosada con jardín privado y piscina comunitaria, ideal para familias.", 6),
    new Piso(4, "Piso con Vistas", "Compra", "Fuengirola", "Piso", 2, 1, 135000, "Los Boliches", 95, "Regular estado", "Luminoso piso con vistas al mar, cerca de la estación de tren y comercios.", 6),
    new Piso(5, "Estudio en el Centro", "Alquiler", "Málaga Capital", "Apartamento", 1, 1, 650, "Centro Histórico", 55, "Buen estado", "Coqueto estudio en el casco antiguo de Málaga, perfecto para estudiantes o parejas.", 6),
    new Piso(6, "Chalet con Jardín", "Ambos", "Marbella", "Casa", 3, 2, 320000, "Nueva Andalucía", 180, "Excelente estado", "Amplio chalet con jardín privado y piscina, en una zona residencial exclusiva.", 6),
    new Piso(7, "Piso Reformado", "Compra", "Estepona", "Piso", 2, 1, 145000, "Casco Antiguo", 90, "Excelente estado", "Recién renovado piso en el encantador casco antiguo de Estepona, cerca de la playa y restaurantes.", 6),
    new Piso(8, "Ático con Terraza", "Alquiler", "Benalmádena", "Apartamento", 2, 2, 1100, "Torrequebrada", 100, "Buen estado", "Ático con amplia terraza y vistas al mar, en una urbanización con piscina y jardines.", 6),
    new Piso(9, "Apartamento Reformado", "Ambos", "Torremolinos", "Apartamento", 1, 1, 85000, "Centro", 60, "Regular estado", "Acogedor apartamento totalmente reformado, cerca de la estación de tren y zonas comerciales.", 6)    
];

// Store pisos array in localStorage
localStorage.setItem('pisos', JSON.stringify(pisos));

// Function to generate HTML for displaying the information of each floor
function generateHTMLForPisos(pisosMostrados) {
    const pisosContainer = document.getElementById("pisosContainer");
    pisosContainer.innerHTML = ""; // Limpiar el contenido actual

    // Iterate over each floor and generate HTML to display its information
    pisosMostrados.forEach((piso, index) => {
        var foto = "img/Casas/casa" + piso.id + ".jpg";
        const pisoHTML = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card text-light text-center bg-dark pb-2">
                    <div class="card-body text-white">
                        <div class="img-area mb-4">
                            <img src="${foto}" class="img-fluid" alt="">
                        </div>
                        <h3>${piso.nombre}</h3>
                        <p class="lead"> ${piso.descripcion}</p>
                        <a href="detalle_piso.html?pisoId=${piso.id}" class="btn bg-primary text-white" onclick="guardarPisoId(${piso.id})">Más Información</a>
                    </div>
                </div>
            </div>
        `;
        pisosContainer.innerHTML += pisoHTML;
    });
}

// Function to save the pisoId to localStorage
function guardarPisoId(pisoId) {
    localStorage.setItem('pisoId', pisoId);
}

// Function to apply filters based on search criteria
function aplicarFiltros() {
    const filtroCalle = document.getElementById("filtroCalle").value.toLowerCase();
    const filtroOperacion = document.getElementById("filtroOperacion").value.toLowerCase();
    const filtroMunicipio = document.getElementById("filtroMunicipio").value.toLowerCase();
    const filtroTipo = document.getElementById("filtroTipo").value.toLowerCase();
    const filtroHabitaciones = parseInt(document.getElementById("filtroHabitaciones").value);
    const filtroBanos = parseInt(document.getElementById("filtroBanos").value);
    const filtroPrecioDesde = parseFloat(document.getElementById("filtroPrecioDesde").value);
    const filtroPrecioHasta = parseFloat(document.getElementById("filtroPrecioHasta").value);
    const filtroDistrito = document.getElementById("filtroDistrito").value.toLowerCase();
    const filtroSuperficieDesde = parseFloat(document.getElementById("filtroSuperficieDesde").value);
    const filtroSuperficieHasta = parseFloat(document.getElementById("filtroSuperficieHasta").value);


    // Validaciones
    if (!isNaN(filtroPrecioDesde) && !isNaN(filtroPrecioHasta) && filtroPrecioDesde > filtroPrecioHasta) {
        alert('Error: El precio desde no puede ser superior al precio hasta.');
        return;
    }

    if ((!isNaN(filtroPrecioDesde) && filtroPrecioDesde < 0) || (!isNaN(filtroPrecioHasta) && filtroPrecioHasta < 0)){
        alert('Error: Los precios no pueden ser negativos');
    }

    if (!isNaN(filtroSuperficieDesde) && !isNaN(filtroSuperficieHasta) && filtroSuperficieDesde > filtroSuperficieHasta) {
        alert('Error: La superficie desde no puede ser superior a la superficie hasta.');
        return;
    }

    if (!isNaN(filtroHabitaciones) && filtroHabitaciones < 0) {
        alert('Error: El número de habitaciones no puede ser negativo.');
        return;
    }

    if (!isNaN(filtroBanos) && filtroBanos < 0) {
        alert('Error: El número de baños no puede ser negativo.');
        return;
    }

    const pisosFiltrados = pisos.filter(piso =>
        (filtroCalle === '' || piso.nombre.toLowerCase().includes(filtroCalle)) &&
        (filtroOperacion === 'cualquiera' || piso.operacion.toLowerCase() === filtroOperacion) &&
        (filtroMunicipio === '' || piso.municipio.toLowerCase().includes(filtroMunicipio)) &&
        (filtroTipo === 'cualquiera' || piso.tipo.toLowerCase() === filtroTipo) &&
        (isNaN(filtroHabitaciones) || piso.numHabitaciones === filtroHabitaciones) &&
        (isNaN(filtroBanos) || piso.numBanos === filtroBanos) &&
        (isNaN(filtroPrecioDesde) || piso.precio >= filtroPrecioDesde) &&
        (isNaN(filtroPrecioHasta) || piso.precio <= filtroPrecioHasta) &&
        (filtroDistrito === '' || piso.distrito.toLowerCase().includes(filtroDistrito)) &&
        (isNaN(filtroSuperficieDesde) || piso.superficie >= filtroSuperficieDesde) &&
        (isNaN(filtroSuperficieHasta) || piso.superficie <= filtroSuperficieHasta)
    );

    generateHTMLForPisos(pisosFiltrados);
}


// Function to navigate to the detailed information page of a floor
function verDetallePiso(index) {
    const pisoSeleccionado = pisos[index];
    localStorage.setItem('pisoSeleccionado', JSON.stringify(pisoSeleccionado));
    window.location.href = 'detalle_piso.html';
}

// Attach the generateHTMLForPisos function to the 'DOMContentLoaded' event
document.addEventListener('DOMContentLoaded', () => {
    generateHTMLForPisos(pisos);

    // Asociar evento click al botón "Aplicar Filtros"
    const btnAplicarFiltros = document.getElementById('btnAplicarFiltros');
    btnAplicarFiltros.addEventListener('click', aplicarFiltros);
});

