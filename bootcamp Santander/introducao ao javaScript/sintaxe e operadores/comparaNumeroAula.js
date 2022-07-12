/*function comparaNumeros(num1, num2){
    const saoIguais = num1 === num2;//retorna false ou true
    const soma = num1 + num2;
    return saoIguais ? 'são iguais' : 'não são iguais';
}*/

function comparaNumeros(num1, num2){
    if(!num1 || !num2) return `defina dois números`;
    const primeiraFrase = criarPrimeiraFrase(num1,num2);
    const segundaFrase = criarSegundaFrase(num1,num2);
return `${primeiraFrase} ${segundaFrase}`;
}

function criarPrimeiraFrase(num1,num2){
    let saoIguais ='';
    if(num1 !== num2){
        saoIguais = ' não';
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function criarSegundaFrase(num1,num2){
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const comapra20 = soma > 20;
    
    if(compara10){
        resultado10 = 'maior';
    }
    if(comapra20){
        resultado20 = 'maior';
    }
    return `sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20 `;
    // usando crase no lugar de aspas simples a sintaxe de valores é ${valor}
}
console.log(comparaNumeros(2,2));