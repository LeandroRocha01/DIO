"use strict";
//resolucao do exemplo validacaoBasica.js em typescript
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
//por padrao input vem como string
let devePrintar = true;
let frase = 'O valor é :  ';
function somar(a, b, x, frase) {
    //necessario tipar os parametros
    //validação de tipo feita na declaracao dos parametros de entrada
    let resultado = a + b;
    if (x) {
        console.log(frase + resultado);
    }
    return a + b;
}
if (button) {
    //ts reconhece q as variaveis podem ser null, necessario validar as variaveis
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(somar(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
    });
}
