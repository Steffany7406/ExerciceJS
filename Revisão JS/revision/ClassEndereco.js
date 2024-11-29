/*
Crie uma classe Endereco com atributos rua e numero. 
Crie uma classe Pessoa que agregue um endereço e exiba a mensagem "Nome: nome, 
Endereço: rua, número".
*/
//---------------------------------------------------------
/*
No JavaScript, um Construtor Super, também conhecido como Construtor Pai ou Construtor Base, 
é uma função construtora que é chamada por outra função construtora, conhecida como Construtor Filho ou Construtor Sub. 
Este conceito é essencial para entender a herança em JavaScript.
*/

class Endereco{
    constructor(rua, numero){
        this.rua = rua;
        this.numero = numero;
    }
    showInforA(){
        return`Endereço: ${this.rua}, ${this.numero}`;
    }
}
class Pessoa extends Endereco{
    constructor(nome, rua, numero){
        super(rua, numero);
        this.nome = nome;
    }
    showInfor(){
        return `Nome: ${this.nome}, ${this.showInforA()}`
    }
}    

// Crie uma instância da classe Pessoa e exiba a mensagem 
let Constpessoa = new Pessoa('Steffany','Rua Ouro Preto', 51);
console.log(Constpessoa.showInfor());
