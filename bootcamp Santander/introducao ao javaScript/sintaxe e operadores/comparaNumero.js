
function comparaNumero(x,y) {
    soma = x+y;
    m10 = ' ';
    m20 = ' '; 
    (x==y)? igualdade = 'iguais' : igualdade = 'diferentes';
    if(soma < 10){
        m10 = 'menor';
        m20 = 'menor';
    }else if((soma > 10) && (soma<20)){
        m10 =  'maior';
        m20 =  'menor';
    }else{
        m10 = 'maior';
        m20 = 'maior';
    }
    console.log('Os números '+x+' e '+y+' são '+igualdade+'. Sua soma é '+soma+', que é '+m10+' que 10 e '+m20+' que 20');
}

comparaNumero(12,14);
