// Função para solicitar os títulos das notícias

/*Solicita ao usuário 10 títulos de notícias usando a função prompt e os armazena em um array.*/
function solicitarTitulos() {
    let titulos = [];
    for (let i = 0; i < 10; i++) {
        let titulo = prompt(`Digite o título da notícia ${i + 1}:`);
        titulos.push(titulo);
    }
    return titulos;
}

/*Exibe os títulos na ordem inversa (do mais recente para o mais antigo) 
usando um loop for que percorre o array de trás para frente.*/

// Função para exibir os títulos na ordem inversa
function exibirTitulosInversos(titulos) {
    document.write("Títulos das notícias na ordem inversa:");
    for (let i = titulos.length - 1; i >= 0; i--) {
        document.write(titulos[i]);
    }
}

// Executando o programa
let titulosNoticias = solicitarTitulos();
exibirTitulosInversos(titulosNoticias);
