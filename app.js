// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Autor: Talia González López


let numeroMaximoNombresRecibidos = 0;
let listaAmigosAgregados = [];
let amigoSorteado = 0
let nombreAgregado;


function agregarNombre () {
    let nombreAgregado = document.getElementById('amigoRecibido').value;
    // aquí vamos a filtrar si el usuario ingresó un string o un número
    //if (typeof(string) == (typeof(nombreAgregado))) {

        listaAmigosAgregados.push(nombreAgregado);
        console.log(nombreAgregado);
        console.log(typeof(nombreAgregado)); // it's added on Feb-24 at 7:10 p.m.
        console.log(listaAmigosAgregados.length);
    //} else {
        //alert ('Evita ingresar números, intenta nuevamente');
    //}
    limpiarCaja(); 
}

function limpiarCaja () {
    document.getElementById('amigoRecibido').value=' ';
}

function sortearAmigo() {
    let amigoSorteado = Math.floor(Math.random()*(listaAmigosAgregados.length+1));
    console.log(listaAmigosAgregados[amigoSorteado]);
    alert(`Tu amigo secreto es: ${listaAmigosAgregados[amigoSorteado]}`); // it's added on Feb-24 at 7:34 p.m.
}

