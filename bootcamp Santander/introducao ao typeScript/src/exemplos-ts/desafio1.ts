// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/*let employee = {};
employee.code = 10;
employee.name = "John";
*/

let empregado: {codigo: number, nome:string} = {
    codigo: 12,
    nome: 'Pedro',
}

interface funcionario {
    code: number,
    name: string
}

let funcionario1: funcionario = {
    code: 21,
    name: 'Leandro'
}

console.log(empregado, funcionario1)