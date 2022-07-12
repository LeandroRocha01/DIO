const maca = {
    value: 2,
}
const laranja = {
    value: 3,
}
const nums = [1,2];

function mapComThis(arr, thisArg){
    return arr.map(function(item){//multiplicar os elementos do array pelo valor do objeto
        return item * this.value;
    },thisArg);
}

//console.log('this -> maçã ',mapComThis(nums, maca));
//console.log('this -> laranja ',mapComThis(nums, laranja));

function mapSemThis(arr){
    return arr.map(function(item){
        return item*2;
    })
}

const numeros = [1,2,3,4,5,6,7,8];
console.log(mapSemThis(numeros));