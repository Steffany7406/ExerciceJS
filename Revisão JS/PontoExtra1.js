function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function generateTable() {
    const tableBody = document.getElementById('primeTable');
    for (let i = 0; i <= 200; i++) {
        const row = document.createElement('tr');
        const numberCell = document.createElement('td');
        const primeCell = document.createElement('td');

        numberCell.textContent = i;
        primeCell.textContent = isPrime(i) ? 'Sim' : 'Não';

        if (isPrime(i)) {
            row.classList.add('prime');
        }

        row.appendChild(numberCell);
        row.appendChild(primeCell);
        tableBody.appendChild(row);
    }
}

generateTable();

function isPrime(num) {
    if (num <= 1) return false;
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function generateTable() {
    const tableBody = document.getElementById('primeTable');
  
    for (let i = 0; i <= 200; i++) {
      const row = document.createElement('tr');
      const numberCell = document.createElement('td');
      const primeCell = document.createElement('td');
  
      numberCell.textContent = i;
      primeCell.textContent = isPrime(i) ? 'Sim' : 'Não';
  
      if (isPrime(i)) {
        row.classList.add('prime');
      }
  
      row.appendChild(numberCell);
      row.appendChild(primeCell);
      tableBody.appendChild(row);
    }
  }
  
  generateTable();