let PrimeValue = parseInt(prompt("Digite primeiro valor:"));
let vetor = new Array(10);
vetor = [PrimeValue];
for (let i = 1; i < 10; i++){
    vetor[i] =  vetor[i - 1] * 2;
    alert(`Num[${i}] = ${vetor[i]}`)
}
