/*
Crie uma classe Veiculo com os atributos marca e modelo. 
Crie uma classe Moto que herde de Veiculo e adicione um atributo cilindradas. 
Adicione um método exibirDetalhes que exiba as informações da moto.
*/

class Veiculo{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
    exibir(){
        console.log(`Marca: ${this.marca} \nModelo: ${this.modelo}`)
    }
}

class Moto extends Veiculo{
    constructor(marca, modelo, cilindradas){
        super(marca, modelo);
        this.cilindradas = cilindradas;
        }
        exibirDetalhes(){
            super.exibir();
            console.log(`Cilindradas: ${this.cilindradas}`)
        }     
}
let moto = new Moto('Honda', 'CBR500R', 500);
moto.exibirDetalhes();
