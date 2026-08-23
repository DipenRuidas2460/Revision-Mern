const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function checkPrimeNumber(num) {
    if (num <= 1) return 'Not a Prime Number';
    if (num <= 3) return 'It is a Prime Number'; 
    if (num % 2 === 0 || num % 3 === 0) return 'Not a Prime Number';

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return 'Not a Prime Number';
        }
    }

    return 'It is a Prime Number';
}

// console.log(checkPrimeNumber(29)); 

function primeNumbersInRange(n) {
    const primes = [];
    for (let i = 0; i <= n; i++) {
        if (checkPrimeNumber(i) === 'It is a Prime Number') {
            primes.push(i);
        }
    }
    return primes.join(', ');
}

// console.log(primeNumbersInRange(300));

function printPrimeNumbersUpto(n) {
    if (n < 2) return 'No prime numbers in this range';

    const primes = new Uint8Array(n + 1).fill(true);
    const arr = []
    primes[0] = primes[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (primes[i]) {
            for (let j = i * i; j <= n; j += i) {
                primes[j] = false;
            }
        }
    }

    for (let i = 2; i <= n; i++) {
        if (primes[i]) {
            arr.push(i);
        }
    }
    
    return arr

}

// rl.question('Enter a number to check if it is prime: ', (num) => {
//     const result = checkPrimeNumber(parseInt(num));
//     console.log(result);
//     rl.close();
// });

// rl.question('Enter a number to find all prime numbers in range: ', (num) => {
//     const result = primeNumbersInRange(parseInt(num));
//     console.log(result);
//     rl.close();
// });

rl.question('Enter a number to find prime numbers up to: ', (num) => {
    const result = printPrimeNumbersUpto(parseInt(num));
    console.log(result);
    rl.close();
}); 
