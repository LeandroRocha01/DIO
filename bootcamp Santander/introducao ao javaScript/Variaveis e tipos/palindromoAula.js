function palindromo(string){
    if(!string) return;// se a string é diferente de true(valor verdadeiro), sai da função

    for(let i=0; i < string.lenght/2; i++){
        if(string[i] !== string[string.lenght-1-i]){//[tamanho da string -1 - i]
            return false;
        }
    }
    return true;
}

console.log(palindromo('abba'));