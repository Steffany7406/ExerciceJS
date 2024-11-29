/*Crie um programa em JavaScript que pergunte ao usuário 3 números diferentes e armazene-os em um array. 
Em seguida, exiba o array com os números digitados. 
Após isso, inverta a ordem dos elementos do array para que a sequência de números fique na ordem contrária àquela que foi digitada. 
Por exemplo, se os números inseridos forem 1, 2, 3, o programa deve exibir 3, 2, 1.*/

const number = [
    parseInt(prompt("Digite um número:")),
    parseInt(prompt("Digite mais um:")),
    parseInt(prompt("Agora mais um:"))
];

alert(number);

let reverse = number.sort(function (reverse, number) {return (number - reverse)});
alert(reverse);