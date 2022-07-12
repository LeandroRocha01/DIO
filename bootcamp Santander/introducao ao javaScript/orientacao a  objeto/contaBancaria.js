class ContaBancaria{//definindo a classe contaBancaria, CLASSE PAI
    constructor(agencia, numero, tipo){//os elementos da conta bancaria.
        this.agencia = agencia; //this se refere ao objeto onde foi declarado, neste caso contaBancaria
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;//_para diferenciar o nome do get e set 
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }//metodos get e set de saldo
    sacar(valor){//metodo sacar
        if(this._saldo>= valor){
            this._saldo = this._saldo - valor;//subtrai o valor sacado do saldo 
            return this._saldo;
        }
        return `saldo insuficiente`;
    }
    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}


class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);//puxa as propriedades da classe pai
        this.tipo = 'corrente';//essa classe tem o tipo fixo de contaCorrente
        this._cartaoCredito = cartaoCredito;//porpriedade da contaCorrente(não existe na classe contaBancaria)
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }//metodos get e set cartaoCredito
}

class ContaPupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
    }
    sacar(valor){/*sobreescrevendo o metodo sacar da classe pai,
     alteracao realizada apenasz dentro de contaUniversitaria*/
        if(valor > 500){
            return `operacao negada, valor acima de R$: 500!`;
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}