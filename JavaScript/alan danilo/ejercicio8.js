const filas = 10;
const columnas = 4;
const avion = Array.from({length: filas},() =>
Array(columnas).fill('Disponible'));
function mostrarAsiento(){
    console.log('Estado actual de los asientos:');
    for(let fila = 0; fila < filas; fila++){
        console.log(avion[fila].join(''));
}
}
function reservarAsiento(fila, columna) {
    if(avion[fila][columna] === 'Disponible'){
        avion[fila][columna] = 'Reservado';
        console.log('¡Asiento en la fila ${fila + 1}, columna ${columna + 1} reservado con exito!');
    }else{
        console.log('¡este asiento ya esta reservado! por favor, elija otro.');
}
}
mostrarAsiento();
reservarAsiento(3,1);
reservarAsiento(5,2);
mostrarAsiento();