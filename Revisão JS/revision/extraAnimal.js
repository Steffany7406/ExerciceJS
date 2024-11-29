class Animal{
    som(){
        return "Som de animal";
    }
}
class Cachorro extends Animal{
    som(){
        return "Au au";
    }
}
class Gato extends Animal{
    som(){
        return "Miau miau"
    }
/*class Loro extends Animal{
    som(){
        return "Rah!! Loro quer biscoito!";
    }
}*/ 
}
const meuCachorro = new Cachorro;
const meuGato = new Gato;
//const meuLoro = new Loro;
console.log(meuCachorro.som());
console.log(meuGato.som());
//console.log(meuLoro.som());