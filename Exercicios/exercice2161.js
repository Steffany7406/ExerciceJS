function RaizQuadrada(n) {
    let result = 3;
    for (let i = 0; i < n; i++) {
      result = 1 / (6 + result);
      result = 3 + result;
    }
    return result.toFixed(10);
  }

  console.log(RaizQuadrada(10)); 