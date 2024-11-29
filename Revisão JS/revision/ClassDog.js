/*
Crie uma classe Cachorro com um atributo nome. Utilize get e set para 
acessar e modificar o nome do cachorro
*/
let nome = prompt('Digite o nome do seu cahorro:')

class Cachorro{
    constructor(nome){
        this.nome = nome;
    }
    getNome(){
        return this.nome;
    }
    setNome(nome){
        this.nome = nome;
    }
}
let mycachorro = new Cachorro('Scooby');
alert(mycachorro.getNome());