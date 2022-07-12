/*numberOne = 1;
console.log(numberOne + 2);
var numberOne;
//hoisting - valor atribuido antes da declaração da variavel, só é possivel usando o var, com let não roda
*/
/*numberOne = 1;
console.log(numberOne + 2);
let numberOne;
//não funciona*/
/*NUMBER_ONE = 1;//não é possivel reatribuir valor em constante
console.log(NUMBER_ONE + 2);
const NUMBER_ONE = 2;
//não funciona*/


var firstName = 'João';
var lastName = 'Souza';
if(firstName === 'João'){
    var firstName = 'Pedro';//variavel global, roda dentro e fora do bloco onde foi declarado
    let lastName = 'Silva';//variavel local, roda dentro do bloco onde foi declarado
    console.log(firstName, lastName);//utiliza as variáveis globais e locais
}
console.log(firstName,lastName);//usa as variaveis globais(var);


