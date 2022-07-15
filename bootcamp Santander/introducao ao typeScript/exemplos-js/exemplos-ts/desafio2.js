"use strict";
// Como podemos melhorar o esse código usando TS? 
var Trabalhos;
(function (Trabalhos) {
    Trabalhos[Trabalhos["Atriz"] = 0] = "Atriz";
    Trabalhos[Trabalhos["Padeiro"] = 1] = "Padeiro";
})(Trabalhos || (Trabalhos = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    ocupacao: Trabalhos.Atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    ocupacao: Trabalhos.Padeiro,
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    ocupacao: Trabalhos.Atriz,
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    ocupacao: Trabalhos.Padeiro
};
