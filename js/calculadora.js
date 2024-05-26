document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const cuotaMensual = document.getElementById('cuota-mensual');
    const resultadoHipoteca = document.getElementById('resultado-hipoteca');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        //Captura de los valores de entrada
        const valorHipotecario = parseFloat(document.getElementById('value').value);
        const ahorroAportado = parseFloat(document.getElementById('savings').value);
        const plazoAnios = parseInt(document.getElementById('years').value);
        const interes = parseFloat(document.getElementById('interest').value);

        // Cálculo de la hipoteca
        let dineroPago;
        let numPlazos;
        let intMensual;
        let pagoMensual;
        let hipoteca;

        dineroPago = valorHipotecario - ahorroAportado;
        numPlazos = plazoAnios * 12;
        intMensual = interes / 12 / 100;

        if (dineroPago <= 0){
            alert("El ahorro aportado no puede ser mayor al valor hipotecario");
        } else if (valorHipotecario <= 0 || ahorroAportado < 0 || plazoAnios <= 0 ) {
            alert("El valor aportado y el plazo en años no pueden ser menores o igual a 0, el ahorro aportado no puede ser menor a 0");
        } else if (interes < 0){
            alert("El interés no puede ser menor a 0%");
        }
            else {
        pagoMensual = (intMensual * dineroPago) / (1 - Math.pow(1 + intMensual, -numPlazos));
        hipoteca = pagoMensual * numPlazos;
        }

        resultadoHipoteca.innerHTML = `
            <h3>Resultado de la hipoteca</h3>
            <p>El pago total por la hipoteca será de: ${hipoteca.toFixed(2)} euros</p>
        `;
        cuotaMensual.innerHTML = `
            <p>Cada mes deberás pagar: ${pagoMensual.toFixed(2)} euros</p>
        `;
    });
});

// Obtener los elementos de los títulos
var valorHipotecarioTitulo = document.getElementById('valor-hipotecario-titulo');
var ahorroAportadoTitulo = document.getElementById('ahorro-aportado-titulo');
var plazoAniosTitulo = document.getElementById('plazo-anios-titulo');
var tipoInteresTitulo = document.getElementById('tipo-interes-titulo');

// Función para mostrar el contenido del párrafo en la ventana modal
function mostrarContenido(parrafo) {
    var modalContentParagraph = document.getElementById('modal-content-paragraph');
    modalContentParagraph.textContent = parrafo;
    document.getElementById('modal').style.display = 'block';
}

// Asignar eventos de clic a los títulos
valorHipotecarioTitulo.addEventListener('click', function() {
    mostrarContenido('Es el precio estimado por una empresa acreditada mediante una tasación. Este precio se fija y será la cantidad máxima que el banco prestará para la operación. Este precio puede ser mayor o menor que el valor de venta, ya que el valor hipotecario ha de ser un valor objetivo y sin especulaciones.');
});

ahorroAportadoTitulo.addEventListener('click', function() {
    mostrarContenido('Es la cantidad de dinero que tú como comprador de la vivienda deberás de aportar antes de que se te conceda un préstamo bancario para la hipoteca. Está fijado que, como mínimo, deberás aportar el 20% del valor hipotecario del inmueble.');
});

plazoAniosTitulo.addEventListener('click', function() {
    mostrarContenido('Es el número de años fijado para pagar el coste total de la hipoteca, de donde se calcularán el número de cuotas mensuales que se deberán pagar en total y el precio en cada una de estas cuotas.');
});

tipoInteresTitulo.addEventListener('click', function() {
    mostrarContenido('El interés es la cantidad a pagar adicionalmente cada mes como remuneración de la concesión de un préstamo. Este interés puede ser fijo o variable.');
});

// Cerrar el modal haciendo clic en la "x"
var closeBtn = document.getElementsByClassName('close')[0];
closeBtn.addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Cerrar el modal haciendo clic fuera del contenido
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});

