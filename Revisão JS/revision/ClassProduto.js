/*
Crie uma classe Produto com um construtor que aceite dois ou três parâmetros (nome, preco, categoria). 
Se categoria não for informado, defina como "Indefinido".
*/

class Produto{
    constructor(nome, preco, categoria){
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
    showInfor(){
        return `Nome: ${this.nome},  Preco: ${this.preco}, Categoria: ${this.categoria}`
    }
}
let produto = new Produto("Nestlé", 5.99);
console.log(produto.showInfor())