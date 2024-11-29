mediaDoAluno = 60;
valordaNota = prompt("Informe sua nota:")

if (mediaDoAluno <= valordaNota) {
    mediaDoAluno = mediaDoAluno - valordaNota;
    document.write("Sua média é ", valordaNota,". Aprovado!!")
} else{
    document.write("Você não passou de módulo!")
}
