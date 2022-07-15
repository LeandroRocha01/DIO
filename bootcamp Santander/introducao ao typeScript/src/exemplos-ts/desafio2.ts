// Como podemos melhorar o esse código usando TS? 



interface pessoa {
    nome: string,
    idade: number,
    ocupacao: Trabalhos,
}
enum Trabalhos {
    Atriz,
    Padeiro,
}

let pessoa1: pessoa = {
    nome: "maria",
    idade: 29,
    ocupacao: Trabalhos.Atriz
};
let pessoa2: pessoa = {
    nome: "roberto",
    idade: 19,
    ocupacao: Trabalhos.Padeiro,
}

let pessoa3: pessoa = {
    nome: "laura",
    idade: 32,
    ocupacao:Trabalhos.Atriz,
};

let pessoa4: pessoa = {
    nome: "carlos",
    idade: 19,
    ocupacao: Trabalhos.Padeiro
}
