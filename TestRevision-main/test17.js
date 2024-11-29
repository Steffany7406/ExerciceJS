/*Crie um programa em JavaScript que solicite ao usuário 10 títulos de notícias de sua cidade 
e armazene-os em um array. 
Após inserir todos os títulos, 
exiba-os na tela na ordem inversa (do mais recente para o mais antigo)*/

for (let i = 0; i < 10; i++) { //Para fazer prompts usando estrutura de repetição
    let resposta = [prompt("Digite um tilulo do noticiario:")];
    alert(`Resposta ${i + 1}: ${resposta}`);
}

let x = resposta.sort(function (resposta, x) {return resposta - x});
alert(`Essas são as noticias: ${x}`);