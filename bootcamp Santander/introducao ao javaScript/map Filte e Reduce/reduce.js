function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        return prev + current;//retorna a soma do valor anterior com o atual, repetindo até o fim do array
    }, 0);
}

const num=[1,2,3];
console.log(somaNumeros(num));