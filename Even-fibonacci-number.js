//Fibonacci Sequence
function fibonacci(n) {
    if (n == 0 || n == 1) return 1;
    
    return fibonacci(n - 1) + fibonacci(n - 2)
}

// Memoized Fibonaci Sequence
function memoizedFibonacci(memoizedArray, n) {
    if (memoizedArray[n]) return memoizedArray[n];
    if (n == 0 || n == 1) return 1;
    memoizedArray[n] = memoizedFibonacci(memoizedArray, n - 1) + memoizedFibonacci(memoizedArray, n -2)
    return memoizedArray[n]
}

function evenFibonacciNumbers(highestValue) {
    let n = 1;
    let sum = 0;
    let currentValue = 1;
    let memoizedArray = [];

    while(currentValue <= highestValue) {
        let fibValue = memoizedFibonacci(memoizedArray, n);
        if (fibValue % 2 == 0) {
            sum += fibValue;
        }

        currentValue = fibValue;
        n++;
    }

    return sum;
}

function evenFib2Abstract() {
    let total = 0;
    let x = y = 1;
    do {
        if (x % 2 == 0) total += x;
        z=x;
        x+=y;
        y=z;
        
    } while (x < 4000000);

    return total;
}

function measure(func) {
    let start = (new Date()).getTime();
    let result = func(arguments[1]);
    let end = (new Date()).getTime();
    console.log('Timing: ', (end - start) / 1000)
    return result;
}


// console.log(EvenFibonacciNumbers(4000000))
console.log(measure(evenFibonacciNumbers, 4000000));
console.log(measure(fibonacci, 42));

// console.log(evenFib2(4000000))