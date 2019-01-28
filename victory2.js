///lets get the function to calculate the divisors

function sumDivisors (n){
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (n % i === 0) {
            sum += i
        } 
    }
    return sum;
}

function sumOfAmicableNumbers (x){
    let sumAmicable = 0;
    for (let current_number = 0; current_number < x; current_number++) {
        
        let b = sumDivisors(current_number);
        let c = sumDivisors(b);
        
        if (current_number === c && current_number !==b) {
            sumAmicable += current_number;
        }
    }
    return sumAmicable;
}

console.log(sumOfAmicableNumbers(10000));
