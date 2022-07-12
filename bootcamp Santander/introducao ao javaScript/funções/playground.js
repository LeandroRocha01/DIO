function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 ={
    nome: 'Maria',
    idade: 30
}

const pessoa2 ={
    nome: 'Carla',
    idade: 26
}
const animal ={
    nome: 'Fiona',
    idade: 5,
    raca: 'pug'
}

console.log(calculaIdade.call(pessoa2, 30));
//call - vai enviar como valor de entrada o objeto onde estão as variaveis utilizadas na função
console.log(calculaIdade.apply(pessoa2, [30]));
//apply segue a mesma linha de raciocinio, porém as entradas que não são objetos devem ser declarados entre []

