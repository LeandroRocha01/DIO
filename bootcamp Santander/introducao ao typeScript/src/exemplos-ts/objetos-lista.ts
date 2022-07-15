const leandro = {
    nome: 'Leandro',
    idade: 20,
    profissao: 'desenvolvedor'
//os objetos também são tipados
//pessoa.idade = '21'; - exemplo gera erro
}

const andre: {nome:string, idade:number, profissao:string} = {
    //outra forma de declarar objetos
    nome: 'André',
    idade: 21,
    profissao: 'pintor'
}

const joao: {nome:string, idade:number, profissao:string} = {
    nome: 'Joao',
    idade: 21,
    profissao: 'Desenvolvedor'
//nome da mesma profissao escrito de maneira diferente é aceita, pode gerar erro
}
//  -   - - - - - -  //
enum Profissao {
//cria uma lista de opcoes para determinado uso
    Professor,
    Ator,
    Desenvolvedor,
    Jogador
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao,
    //profissao é um atributo opcional
}

interface Estudante extends Pessoa {
    materias: string[],
//vai receber uma lista com dados tipo string
}

const pedro: Pessoa = {
    nome: 'Pedro',
    idade: 32,
    profissao: Profissao.Ator
//utiliza o enum para definir uma profissao cadastrada
}

const flavio: Estudante = {
    nome: 'Flavio',
    idade: 17,
    materias: ['POO', 'BD']
}

function listar(lista: string[]){
    for (const item of lista){//para cada item da lista..fazer
        console.log('- ',item);
    }
}

listar(flavio.materias);