
saldoDisponivel = 1000;
valordoSaque = prompt("Informe o valor do saque:")

if (valordoSaque <= saldoDisponivel) {
    saldoDisponivel = saldoDisponivel - valordoSaque;
    document.write("Você está sacando R$ ", valordoSaque,".")
} else{
    document.write("O valor solicitado é maior que o disponivel!")
}
document.write("Saldo disponivel: ", saldoDisponivel)