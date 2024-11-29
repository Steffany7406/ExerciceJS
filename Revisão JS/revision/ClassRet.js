/*
Crie uma classe Retangulo com os atributos largura e altura. 
Adicione um método calcularArea que retorne a área do retângulo.
*/

class Retangulo{
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea(){
        return this.altura * this.largura;
    }
}
let ret = new Retangulo(15, 25);
console.log(`A área do retângulo é: ${ret.calcularArea()}`);