function sumOfDivisors(n) {
  let sum = 0;
  
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      sum = sum + i;
    }
  }
  return sum;
}

function  sumOfAmicableNumbers(highest_number) {
  let amicableSum = 0;
  
  for (let current_number = 1; current_number < highest_number; current_number++) {

    let b = sumOfDivisors(current_number);
    let c = sumOfDivisors(b);

   if (c === current_number && b !== current_number) {
     amicableSum += current_number;
   }
  }

  return amicableSum;
}

console.log(sumOfAmicableNumbers(10000))