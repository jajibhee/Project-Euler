function isPalindrome(val) {
    let valString = '' + val;
    let stringLen = valString.length;

    for (let i = 0; i < stringLen/2; i++) {
        if (valString[i] !== valString[stringLen - i - 1]) return false
    }

    return true;
}

function isPalindrome2(val) {
    let valString = '' + val;
    return valString === valString.split('').reverse().join('');
}


function largestPalindromeProduct() {
    let largestPalindrome = 0;

    for (let i = 100; i < 1000; i++) {
        for(let x = 100; x < 1000; x++) {
            let product = i * x;
            if (isPalindrome(product) && largestPalindrome < product) {
                largestPalindrome = product;
            }
        }
    }

    return largestPalindrome;
}

console.log(largestPalindromeProduct())