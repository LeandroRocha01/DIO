const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);
    return [...mySet];//sprad - cria um clone do tipo string do elemento definido
}

console.log(valoresUnicos(meuArray));