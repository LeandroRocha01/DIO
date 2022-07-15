"use strict";
let valorAny;
//any define que a variavel pode recebre qualquer tipo de valor
valorAny = 1;
valorAny = 'a';
valorAny = true;
let valorString = 'teste';
//define o tipo string para a variavel POREM...
valorString = valorAny;
let valorString2 = 'teste2';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
    //vai devolver um resultado errado pois os valores não são do tipo string
}
somarString(valorString, valorString2);
somarString('hello ', 'World');
