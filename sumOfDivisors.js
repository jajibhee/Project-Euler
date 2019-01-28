function sumOfDivisors(n) {
  let sum = 0;
  
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      sum = sum + i;
    }
  }
  return sum;
}

// I NEED TO UNDERSTAND THIS PART!!!
function  sumOfAmicableNumbers(x) {
  let sum = 0;
  let amicableNumbers = [];
  
  for (let current_number = 1; current_number < x; current_number++) {
    if (amicableNumbers.indexOf(current_number) != -1) continue;

    let b = sumOfDivisors(current_number);
    let a = sumOfDivisors(b);

   if (a == current_number && b !== current_number) {
     sum = sum + current_number + b;
     amicableNumbers.push(current_number);
     amicableNumbers.push(b)
   }
  }

  console.log(amicableNumbers);
  return sum;
}

console.log(sumOfAmicableNumbers(10000))