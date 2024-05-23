(function(){
    const titleQuestion = [...document.querySelectorAll('.questions__title')];
    /*guardamos en ese variable todas las preguntas*/

    /*iteramos cada pregunta*/
    titleQuestion.forEach(question =>{
        /*cada vez que pulsemos creo variables*/
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling; //coge el hermano es decir el siguiente elem, por ej el siguiente elem de h3 es p, por lo q answer == p
            let addPadding = question.parentElement.parentElement;
            
            addPadding.classList.toggle('questions__padding--add');

            //obtengo el 1º hijo == span y obtengo las clases del span y le añado o quito segun si tiene, vamos lo q hace es q la flchea gire
            question.children[0].classList.toggle('questions__arrow--rotate');

           if(answer.style.visibility === "visible"){ 
                answer.style.visibility="hidden"; 
            }else{
                answer.style.visibility = "visible";
                height = answer.scrollHeight;
                addPadding.computedStyleMap.height = `${height}px`;
            }

        });
    });
})();


document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let nombre = document.querySelector('input[type="text"]').value;
    let telefono = document.querySelector('input[type="tel"]').value;
    let correo = document.querySelector('input[type="email"]').value;
    let mensaje = document.querySelector('textarea').value;

    // Validar que el teléfono tenga exactamente 9 dígitos y sean números
    if(/^\d{9}$/.test(telefono)) {
        let contenido = `Nombre: ${nombre} \nTeléfono: ${telefono} \nCorreo: ${correo}\nMensaje: ${mensaje}`;

        window.open(`mailto:iumalagadreamhome@gmail.com?subject=Consulta&body=${contenido}`);
    } else {
        alert("Por favor ingrese un número de teléfono válido con 9 dígitos numéricos.");
    }
});










