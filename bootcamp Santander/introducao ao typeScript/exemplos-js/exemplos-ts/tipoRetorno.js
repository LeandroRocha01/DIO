"use strict";
function somarValoresNumericos(x, y) {
    //define o tipo de saida
    return x + y;
    //return x + y.toString();
    //se nao estivesse definido o tipo de saida isso poderia rodar
}
console.log(somarValoresNumericos(1, 3));
function printaValoresNumericos(num1, num2) {
    //a funcao não retorna nada
    console.log(num1 + num2);
}
function somarValoresNumericosETratar(num1, num2, callback) {
    //callback - funcao passada como parametro q vai executar qndo ocorrer determinada ação 
    let result = num1 + num2;
    return callback(result);
}
function dividePorEle(num) {
    return num / num;
}
function aoQuadrado(num) {
    return num * num;
}
console.log(somarValoresNumericosETratar(1, 2, aoQuadrado));
//a funcao callback neste caso é aoQuadrado, só executa depois da soma
console.log(somarValoresNumericosETratar(1, 2, dividePorEle));
//callback é dividir por ele
