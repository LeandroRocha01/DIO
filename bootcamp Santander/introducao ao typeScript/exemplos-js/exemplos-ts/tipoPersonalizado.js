"use strict";
//cria um tipo personalizado
function somarValores(input1, input2) {
    //cada input pode ser do tipo number ou string
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
        //garante q os dois vao ser strings
    }
    //se nenhum for string, logo os dois sao numeros, podendo assim fazer a soma
    return input1 + input2;
}
console.log(`soma ${somarValores(1, 5)}`);
console.log(`concatena somarValores('Helo ','World')`);
console.log(`concatena numeros somarValores('1','5')`);
