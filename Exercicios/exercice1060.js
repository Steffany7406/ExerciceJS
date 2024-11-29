const index = [7, -5, 6, -3.4, 4.6, 12];

let posi = 0;
for(let i = 0; i < 6; ++i){
    let num = parseFloat(index.shift());

    if(num > 0)  ++posi;
}

console.log(`${posi} valores positivos`);