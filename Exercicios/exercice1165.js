function isPrime(num) {
    if (num <= 1) {
      console.log(`${num} Não é primo`);
    } else if (num <= 3) {
      console.log(`${num} é primo`);
    } else {
      for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
          console.log(`${num} Não é primo`);
          return;
        }
      }
      console.log(`${num} é primo`);
    }
  }
  isPrime(28); 
  isPrime(23); 

