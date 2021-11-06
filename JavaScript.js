"use strict";

let lista_array = [];

document.querySelector('#btn-agregar').addEventListener('click', agregar);
function agregar() {
    let inp_participante = document.querySelector('#nombre');
    let item = document.createElement('li');

    if (inp_participante != "") {
        item.innerHTML = inp_participante.value;
        lista_array.push(item);  
        actualizarTabla();
        inp_participante.value = '';
    }
}

document.querySelector('#btn-borrarUlt').addEventListener('click', function borrarUltimo() {
    lista_array.pop();
    actualizarTabla();
});

document.querySelector('#btn-limpiar').addEventListener('click', function limpiarTodos() {
    let ganador = document.querySelector('#ganador');
    ganador.innerHTML = '';
    lista_array = [];
    actualizarTabla();
});

document.querySelector('#btn-sortear').addEventListener('click', function sortear() {
    let numero1 = Math.random() * lista_array.length;
    let numero2 = Math.floor(numero1 + 1);

    let ganador = document.querySelector('#ganador');
    ganador.innerHTML = lista_array[numero2 - 1].innerHTML;
});

function actualizarTabla() {
    let lista = document.querySelector('#listado');
    lista.innerHTML = '';
    lista_array.forEach(item => {
        lista.appendChild(item);
    });
}