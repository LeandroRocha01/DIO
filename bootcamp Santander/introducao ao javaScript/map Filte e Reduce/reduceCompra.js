const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    }
];


const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current){
        return prev - current.preco;//curent.preco é o preco do objeto manipulado agora
    }, saldoDisponivel);//valor inicial vai ser o saldoDisponível
}

console.log(calculaSaldo(saldoDisponivel, lista));