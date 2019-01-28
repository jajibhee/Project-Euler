//Multiples of 3 and 5
function sumOfMultiples(x1, x2, n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        if (i % x1 === 0 || i % x2 === 0) {
            sum += i;
        }
    }

    return sum;
}

console.log(sumOfMultiples(3, 5, 1000))