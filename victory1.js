// Sum of multiples of 3 and 5

function divisors (x, y, n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % x === 0 || i % y === 0) {
            sum +=i;
        }
        
    }
    return sum;
}
console.log(divisors(3,5,1000));
