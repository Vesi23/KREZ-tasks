const input = ['1', '0']; // Sample input

// Function to check if a number is prime
const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }

    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

// Function to compute the sum of the first n prime numbers
const sumOfPrimes = (n) => {
    let count = 0;
    let sum = 0;
    let num = 2;

    while (count < n) {
        if (isPrime(num)) {
            sum += num;
            count++;
        }
        num++;
    }

    return sum;
};

const result = () => {
    const inputArr = input.slice(); // Create a copy of the input array
    let index = 0;

    while (true) {
        const n = +inputArr[index++]; // Get the next number from inputArr
        // Exit on "0"
        if (n === 0) break;

        if (n > 0) {
            const sum = sumOfPrimes(n);
            console.log(`Sum of first ${n} prime numbers: ${sum}`);
        } else {
            console.log('Invalid input');
        }
    }
}

result();
