let numero;
do {
    numero = parseFloat(prompt("Insira um número (insira um valor negativo para sair):"));  
} while (numero >= 0); 

alert("Você inseriu um número negativo. O loop foi encerrado.");