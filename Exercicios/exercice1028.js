var lines = [
    3,
    8, 12,
    9, 27,
    259, 111
];

const MDC = (a, b) => (b === 0) ? a : MDC(b, a % b);

let N = parseInt(lines.shift());

for (let i = 0; i < N; ++i) {
    let [F1, F2] = lines.shift().split(' ').map((x) => parseInt(x));

    console.log(MDC(F1, F2));
}