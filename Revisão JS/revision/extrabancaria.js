class ContaBancaria {
   /** 
     * Constructor
     * @param {string} titular 
     */
    constructor(titular) {
      this._titular = titular;
      this._saldo = 0; /*Na classe ContaBancaria, 
      protegi o valor do saldo tornando-o uma propriedade privada, denotada pelo prefixo de sublinhado */
    }
    /**
     * Deposit money into the account
     * @param {number} valor - The amount to deposit
     */
    depositar(valor) {
      if (valor > 0) {
        this._saldo += valor;
      } else {
        throw new Error("Valor de depósito inválido");
      }
    }
  
    /**
     * Withdraw money from the account
     * @param {number} valor - The amount to withdraw
     */
    sacar(valor) {
      if (valor > 0 && valor <= this._saldo) {
        this._saldo -= valor;
      } else {
        throw new Error("Valor de saque inválido");
      }
    }
  
    /**
     * Get the current balance
     * @returns {number} The current balance
     */
    getSaldo() {
      return this._saldo;
    }
  }

const conta = new ContaBancaria("John Doe");
conta.depositar(100);
console.log(conta.getSaldo()); // 100
conta.sacar(50);
console.log(conta.getSaldo()); // 50