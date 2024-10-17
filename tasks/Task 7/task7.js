const input = [
    "5 apple and 10 orange are rotten in the basket",
    // "The temperature was 20 degrees yesterday.",
    // "No numbers here!",
    // "3 cats, 4 dogs and 20 frogs.",
    // "Another line with 6.",
    // "You have to pay BGN 100 and you will give me back BGN 20 in change"
];

const sumOfNumbers = (input) => {
    let totalSum = 0;

    for (let i = 0; i < input.length; i++) {
        const line = input[i];
        let currentNumber = '';  // Съхраняваме текущото число като стринг

        // Обхождаме всеки символ от линията
        for (let j = 0; j < line.length; j++) {
            const char = line[j];

            // Ако символът е цифра, добавяме го към текущото число
            if (char >= '0' && char < '9') {
                currentNumber += char;

            } else if (currentNumber.length > 0) {
                totalSum += +currentNumber; // Превръщаме стринга в число и го добавяме към сумата
                currentNumber = ''; // Нулираме текущото число
            }

        }

        if (currentNumber.length > 0) {
            totalSum += +currentNumber;
        }

    }
    return totalSum;
}
const result = sumOfNumbers(input);
console.log(`Sum of the numeric values: ${result}`);