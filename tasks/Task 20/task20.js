//For example -> 25 + 30= 55 and 5 + 5=10 or 120+130=250->2+5+0=7

// const input = ["25 30"];
const input = ["120 130"];

const sumOfDigits = (input) => {
    const [x, y] = input[0].split(' ').map(Number);

    const totalSum = x + y;
    const totalSumString = totalSum.toString();

    let resultSum = 0;

    for (const num of totalSumString) {
        resultSum += +num;
    }

    return resultSum;

}

const result = sumOfDigits(input);
console.log(`The digit sum of the sum of ${input[0]} is: ${result}`);



