/*Exercício: 

1. Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;

2. Dentro de ContaBancaria, crie os métodos sacar e depositar;

4. Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;

6. Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;

7. Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;

8. Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;

9. Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
----------------------------------------------------------------------------------*/

class ContaBancaria{
    constructor(agencia, numero, titular, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.titular = titular;
        this._saldo = saldo;  // protegendo o atributo saldo
        this.tipo = tipo;
    }
    getFirstSaldo(){
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
            console.log(`Saque efetuado com sucesso! Valor R$${valor.toFixed(1)}`)
        }
        this._saldo -= valor;
            console.log(`Valor Atual: R$${this._saldo}`)
                return;
    }
    getSaldo(){ //Esse método atua como uma interface controlada para acessar o saldo, garantindo que o valor não seja modificado acidentalmente ou maliciosamente.
        return this.saldo,
        console.log(`Saldo Atual: ${this._saldo}`)
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, titular, saldo, limite, cartaoDebito, cartaoCredito){
        super(agencia, numero, titular, 'conta-corrente', saldo);
        this.limite = limite;
        this.cartaoDebito = cartaoDebito;
        this.cartaoCredito = cartaoCredito;
    }
    showInfo(){
        return (`Agência: ${this.agencia}, 
            Número: ${this.numero}, 
            Titutlo: ${this.titular}, 
            Tipo: ${this.tipo}, 
            Saldo: ${this._saldo}`);
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero,titular, saldo, valorguardado, cartaoDebito){
        super(agencia, numero, titular, 'conta-poupança', saldo,  cartaoDebito);
        this.valorguardado = valorguardado;
        this.cartaoDebito =  cartaoDebito;

    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, titular, saldo){
        super(agencia, numero,titular, 'conta-universitária', saldo);
    }
    sacar(valor){
        if(valor > 500){
         console.log(`Valor maior que 500 reais!`);   
    } else{
        super.sacar(valor)
        console.log(`Saque efetuado com sucesso! Valor R$${valor.toFixed(1)}`);
    }
}
}

let count = new ContaBancaria(1406, 200673901, "Patricia", "conta-corrente", 1581.45);

count.getFirstSaldo() // ver o saldo
count.sacar(650) // saque efetuado
count.depositar(220)
count.getSaldo()
