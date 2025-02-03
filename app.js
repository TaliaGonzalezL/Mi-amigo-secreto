// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Autor: Talia González López


let numeroMaximoNombresRecibidos = 0;
let listaAmigosAgregados = [];
let amigoSorteado = 0


function agregarNombre () {
    let nombreAgregado = document.getElementById('amigoRecibido').value;
    listaAmigosAgregados.push(nombreAgregado);
    console.log(nombreAgregado);
    console.log(listaAmigosAgregados.length);
    limpiarCaja(); 
}

function limpiarCaja () {
    document.getElementById('amigoRecibido').value=' ';
}

function sortearAmigo() {
    let amigoSorteado = Math.floor(Math.random()*(listaAmigosAgregados.length+1));
    console.log(listaAmigosAgregados[amigoSorteado]);
}

