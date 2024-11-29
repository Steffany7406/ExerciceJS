var count = 0
do {
  var num = parseInt(prompt("Digite um número!"))
  if (num > 100){
    alert("Você digitou um número maior que 100!!")
    count++
  }
} while (num <= 100) {
  alert("Existem números maiores que 100!")
}