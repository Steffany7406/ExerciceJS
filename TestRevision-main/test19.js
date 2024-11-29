/*let v = 10;
while (v > 1) {
    v--;
  console.log(v)  
}*/

// Função para iniciar a contagem regressiva
function iniciarContagemRegressiva() {
    // Solicita ao usuário um número inteiro positivo
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));

    // Verifica se o número é maior que 10
    if (numero > 10) {
        alert("Erro: O número digitado é maior que 10.");
    } else {
        // Inicia a contagem regressiva de 10 até o número digitado
        for (let i = 10; i >= numero; i--) {
            alert(i);
        }
    }
}
// Chama a função para iniciar a contagem regressiva
iniciarContagemRegressiva();
