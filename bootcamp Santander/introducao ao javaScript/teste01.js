/*//declarar funcao
function soma(a, b) {
    console.console.log(a+b);//retorna o valor no console
    return a+b;//retorna o valor para o sistema utilizar 
}
soma(3,5);//uso da funcao declarada a cima*/


function returnEvenValues(array){//declareando funcao
    let evenNums= [];//declarando variavel auxiliar
   for(let i = 0;i < array.length; i++){
    if(array[i] % 2 === 0){
        evenNums.push(array[i]);
    }else{
        console.log(array[i],' não é par');
    }
   }
   console.log('valores pares são: ',evenNums)
}

let array = [1,2,4,5,7,8];//declarando os valores do array

returnEvenValues(array);//chamando a funcao
