const alunos = [//cada elemento do array é um objeto
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},{
		nome: 'Miguel',
		nota: 3,
		turma: '2C',
	},
];

function alunosAprovados(arr, media){
    let aprovados = [];

    for(let i=0;i<arr.length;i++){
        
        const{nota,nome} = arr[i];//define que estamos usando apenas as key nota e nome, ignorando a key turma

        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos,5));