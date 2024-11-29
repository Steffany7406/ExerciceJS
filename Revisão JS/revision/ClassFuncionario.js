/*
Crie uma classe Funcionario que tenha um contador estático para 
registrar o número total de funcionários criados.
*/

class Funcionario{
    static contador = 0; // contador estático

    constructor(nome, cargo){
        this.nome = nome;
        this.cargo = cargo;
        Funcionario.contador++ // incrementa o contador ao criar um novo funcionário
    }
    getNome(){
        return this.nome;
    }
    getCargo(){
        return this.cargo;
    }
    static getTotalFuncionarios(){
        return Funcionario.contador;
    }
}
let funcionario = new Funcionario('Saulo', 'Engenheiro');
let funcionario1 = new Funcionario('Allan', 'Back-End');
let funcionario2 = new Funcionario('Thais', 'FullStack');
let funcionario3 = new Funcionario('Germano',  'Front-End');

console.log(Funcionario.getTotalFuncionarios()); // imprime o número total de funcionários criados
console.log(funcionario2.getNome());

/*class Funcionario{
    constructor(nome, funcionario,  salario){
        this.nome = nome;
        this.funcionario = funcionario;
        this.salario =  salario;
    }

    contador(){
        for(let i = 0; i < this.funcionario.length; i++){
            this.funcionario[i].contador++;
        }
    }
}
var funcionario1 = new Funcionario('Steffany', ['Saulo', 'Wesley', 'Allan', 'Thais'], 10);
console.log(funcionario1.contador()); */