/*
Crie uma classe ContaBancaria com os atributos titular e saldo (inicialmente 0). 
Adicione métodos depositar(valor) e sacar(valor). 
Proteja o atributo saldo para que não seja acessado diretamente.
*/

class ContaBancaria{
    constructor(titular, saldo){
        this.titular = titular;
        this._saldo = saldo;  // protegendo o atributo saldo
    }
    getSaldo(){
        console.log(`Olá, ${this.titular}! Seu saldo é de ${this._saldo}`)
    }
    depositar(valor){ //Lógica de validação em métodos setter depositar() e sacar() para garantir atualizações corretas do saldo
        if(valor <= 0){
            console.log(`Valor de depósito incorreto.`)
            return;
        }
        this._saldo += valor;
        console.log(`Depósito efetuado com sucesso! Valor: ${valor.toFixed(2)}`)
    }
    sacar(valor){
        if(valor <= 0){
            console.log(`Valor de saque incorreto.`)
            return;
        }
        if(valor >  this._saldo){
            console.log(`Saldo insuficiente.`)
            return;
        }else{
            console.log(`Saque efetuado com sucesso! Valor R$${valor.toFixed(2)}`)
        }
        this._saldo -= valor;
            console.log(`Valor Atual: R$${this._saldo}`)
                return;
    }
    getSaldo1(){ //Esse método atua como uma interface controlada para acessar o saldo, garantindo que o valor não seja modificado acidentalmente ou maliciosamente.
        return this.saldo,
        console.log(`Saldo Atual: ${this._saldo}`)
    }
}
let count = new ContaBancaria("Patricia", 17000);

count.getSaldo() // ver o saldo
count.sacar(12000) // saque efetuado
count.depositar(650)
count.getSaldo1()
