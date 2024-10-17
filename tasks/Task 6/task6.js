const input = ['100', '0'];

const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

const generatePrimes = (limit) => {
    const primeSieve = [];
    for (let i = 0; i <= limit; i++) {
        primeSieve.push(true);
    }
    primeSieve[0] = primeSieve[1] = false; // 0 and 1 are not prime

    for (let i = 2; i * i <= limit; i++) {
        if (primeSieve[i]) {
            for (let j = i * i; j <= limit; j += i) {
                primeSieve[j] = false; // Mark multiples as non-prime
            }
        }
    }

    // collect prime numbers
    const primes = [];
    for (let i = 0; i <= limit; i++) {
        if (primeSieve[i]) {
            primes.push(i);
        }
    }
    return primes;
}

const goldbachCombinations = (n) => {
    const primes = generatePrimes(n);
    const combinations = new Set(); // To store unique combinations

    for (let prime of primes) {
        const complement = n - prime;
        if (complement >= prime && primes.includes(complement)) {
            combinations.add(`${prime} + ${complement}`);
        }
    }

    return combinations.size; // Return the count of unique combinations
}

const result = () => {
    const inputArr = input.slice(); // Create a copy of input array
    let index = 0;

    while (true) {
        const n = Number(inputArr[index++]);
        // End input on "0"
        if (n === 0) break;

        if (n >= 4 && n <= 50000 && n % 2 === 0) {
            const count = goldbachCombinations(n);
            console.log(`Number of combinations: ${count}`);
        } else {
            console.log("Please enter a valid even number (n>= 4 and n<= 50000).");
        }
    }
}

result();
