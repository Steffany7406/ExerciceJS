let received = parseInt(prompt("Digite um número inteiro:"))
let i = 0;
while (i < received) {
  let x = parseInt(prompt("Digite outro número:"))
  let isPrime = true;
  let j = 2;
  while (j * j <= x) {
    if (x % j === 0) {
      isPrime = false;
      break;
    }
    j++;
  }
  if (isPrime) {
    alert(`${x} é primo!`);
    break;
  } else {
    alert(`${x} não é primo`);
    break;
  }
i++
}