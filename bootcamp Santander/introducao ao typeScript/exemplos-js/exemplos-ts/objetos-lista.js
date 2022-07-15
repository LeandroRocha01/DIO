"use strict";
const leandro = {
    nome: 'Leandro',
    idade: 20,
    profissao: 'desenvolvedor'
    //os objetos também são tipados
    //pessoa.idade = '21'; - exemplo gera erro
};
const andre = {
    //outra forma de declarar objetos
    nome: 'André',
    idade: 21,
    profissao: 'pintor'
};
const joao = {
    nome: 'Joao',
    idade: 21,
    profissao: 'Desenvolvedor'
    //nome da mesma profissao escrito de maneira diferente é aceita, pode gerar erro
};
//  -   - - - - - -  //
var Profissao;
(function (Profissao) {
    //cria uma lista de opcoes para determinado uso
    Profissao[Profissao["Professor"] = 0] = "Professor";
    Profissao[Profissao["Ator"] = 1] = "Ator";
    Profissao[Profissao["Desenvolvedor"] = 2] = "Desenvolvedor";
    Profissao[Profissao["Jogador"] = 3] = "Jogador";
})(Profissao || (Profissao = {}));
const pedro = {
    nome: 'Pedro',
    idade: 32,
    profissao: Profissao.Ator
    //utiliza o enum para definir uma profissao cadastrada
};
const flavio = {
    nome: 'Flavio',
    idade: 17,
    materias: ['POO', 'BD']
};
function listar(lista) {
    for (const item of lista) { //para cada item da lista..fazer
        console.log('- ', item);
    }
}
listar(flavio.materias);
