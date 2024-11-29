/*
Crie uma classe chamada Carro com os seguintes atributos: marca, modelo e ano. 
A classe deve ter um método chamado exibirDetalhes que 
retorne uma string com as informações do carro
*/ 

class  Carro {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this. modelo = modelo;
        this.ano = ano;
    }
    exibirDetalhes(){
        console.log(`Marca: ${this.marca} \nModelo: ${this.modelo} \nAno: ${this.ano}`)
    }
}
let myCar = new Carro("Volkswagem", "T-cross", 2022);
myCar.exibirDetalhes();