//receber uma plavra que possa ser lida ao contrario sem perder o sentido EX.: ovo

let frase = "ovo";

function verificaPalindromo(frase){
    if (!frase) return'string invalida';
    let reverse = frase.split("").reverse().join("");
    let confirm = '';
    if(frase !== reverse){
        confirm = ' não';
    }
    console.log(`${frase}${confirm} é um plaindromo`);
}

verificaPalindromo(frase);