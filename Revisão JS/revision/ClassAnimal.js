/*
Crie uma classe Animal com um método emitirSom. 
Crie classes Cachorro e Gato que herdem de Animal e 
sobrescrevam o método emitirSom para exibir "Latido" e "Miau" respectivamente.
*/

class Animal{
    som(){
       return 'Animal'; 
    }
}
class Cachorro extends Animal{
    som(){
        return 'Au Au';
    }
}
class Gato extends Animal{
    som(){
        return 'Miau';
    }
}

var mydog = new Cachorro;
var mycat = new Gato;
console.log(`The Dog say ${mydog.som()}`);
console.log(`The Cat say ${mycat.som()}`);

//Outra Forma
class Animals{
    som(){
        return 'Os animais fazem sons';
    }
}
class Sounds extends Animals{
    constructor(cachorro, gato, loro){
        super(cachorro, gato);
        this.loro = loro;
        this.cachorro =  cachorro;
        this.gato = gato;
    }
    som(){
        return `Cachorro: ${this.cachorro}, \nGato: ${this.gato}, \nLoro: ${this.loro}`
    }
}
let animals = new Sounds('Au Au', 'Miau', 'Rah! Loro quer biscoito!');
console.log(animals.som());