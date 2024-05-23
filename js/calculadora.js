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