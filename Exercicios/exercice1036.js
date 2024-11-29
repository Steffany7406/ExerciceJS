const A = parseFloat(prompt("Enter value for A: "));
const B = parseFloat(prompt("Enter value for B: "));
const C = parseFloat(prompt("Enter value for C: "));

let delta = Math.pow(B, 2) - 4 * A * C;

if (delta < 0) {
  alert("Impossivel calcular");
} else {
  let root1 = (-B + Math.sqrt(delta)) / (2 * A);
  let root2 = (-B - Math.sqrt(delta)) / (2 * A);

  alert(`Raiz 1 = ${root1.toFixed(5)}`);
  alert(`Raiz 2 = ${root2.toFixed(5)}`);
}