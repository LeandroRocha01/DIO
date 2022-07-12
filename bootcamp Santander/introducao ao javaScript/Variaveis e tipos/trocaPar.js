function trocaPar(vetor){
    for(let x=0; x < vetor.length; x++){
        if (vetor[x]%2 === 0){
            vetor[x] = 0;
        }
    }
    console.log(vetor);
}
let array = [1,3,4,6,7]
console.log(array);
trocaPar(array);
