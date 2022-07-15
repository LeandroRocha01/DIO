"use strict";
let anyValue;
//pode ser qualquer tipo de valor
let unknownValue;
unknownValue = 3;
unknownValue = 'a';
unknownValue = true;
//pode ser de qualquer tipo POREM, nao ocorre o erro de any
let stringTeste = 'teste';
//stringTeste = unknownValue;
//é preciso validar o tipo de dado de unknown
if (typeof unknownValue === 'string') {
    stringTeste = unknownValue;
    //agora validado podemos defini-lo a um tipo string 
}
// -  - - - - - -  //
function jogaErro(erro, codigo) {
    // tipod eda saida que diz q a funcao é interrompida, não terminou de rodar
    throw { error: erro, code: codigo };
    //throw devolve um alerta de erro no terminal E interrompe o codigo
}
jogaErro('deu erro', 500);
