var currentNumberWrapper = document.getElementById('currentNumber');
//declarando o valor do html na variavel do JS

var currentNumber = 0;
function increment(){
    if(currentNumber < 10){
        currentNumber = currentNumber +1;
        currentNumberWrapper.innerHTML = currentNumber;
        //vai atualizar o valor do HTML usando a propriedade innerHTML
    }
}

function decrement(){
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber;
}