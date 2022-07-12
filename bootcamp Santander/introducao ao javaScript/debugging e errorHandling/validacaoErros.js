
let num = [1,2,3,4,5,6,7];

function validaErro(array, x){
    try{//roda o codigo, se tiver erro passa para o catch
        if(!array || !x){
            throw new ReferenceError('Parametros invalidos');
        }        
        if((typeof array)!='object'){
            throw new TypeError('Vetor não é do tipo object');
        }
    
        if((typeof x)!='number'){//valida num
            throw new TypeError('numero não é do tipo num');
        }
    
        if(x !== (array.length)){//tamanho
            throw new RangeError(`Vetor não tem o tamanho ${x}`);
        }
        return`O vetor tem o tamanho definido`;
    }catch(e){//manipula os erros do try
        if(e instanceof ReferenceError){ // verifica se o erro(e) é do tipo ReferenceError
            console.log('ReferenceError');
            console.log(e.message)//mostra somente a mensagem do erro, ignorando a linha e o call back
        }else if(e instanceof TypeError){
            console.log('TypeError');
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log('RangeError');
            console.log(e.message);
        }else{
            console.log('Erro indefinido');
        }
    }
}

console.log(validaErro(num, 2));