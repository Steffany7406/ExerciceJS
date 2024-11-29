const lines = [10.0, 20.1, 5.1];

let [a, b, c] = lines.shift();

let delta = b * b - 4 * a * c;

if (a !== 0 && delta > -1) {
  let R1 = (-b + Math.sqrt(delta)) / (2 * a);
  let R2 = (-b - Math.sqrt(delta)) / (2 * a);

  console.log(`R1 = ${R1.toFixed(5)}`);
  console.log(`R2 = ${R2.toFixed(5)}`);
} else {
  console.log("Impossivel calcular");
}