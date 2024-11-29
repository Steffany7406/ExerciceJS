let X = 45;
let Y = 17;

if (X > Y) {
    [X, Y] = [Y, X];
}

let soma = 0;
for (let i = X; i <= Y; ++i) {
    if (i % 13 === 0) {
        continue;
    }
    soma += i;
}

console.log(soma);