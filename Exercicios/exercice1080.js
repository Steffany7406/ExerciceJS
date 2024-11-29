var grande = [2, 113, 45, 34565, 6, 8];

let [maior, posicao] = [Number.MIN_VALUE, 1];

for (let i = 0; i < 100; ++i) {
    let numero = parseInt(grande.shift());

    if (numero > maior) {
        maior = numero;
        posicao = i + 1;
    }
}

console.log(maior);
console.log(posicao);