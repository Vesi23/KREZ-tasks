const wordsFn = (input) => {
    // Check for input length constraint
    if (input.length > 1024) {
        console.log("Input sentence is too long. Must be 1024 characters or less.");
        return;
    }

    // Заменяме всички пунктуационни знаци с интервал (като премахваме специални символи)
    let cleanedSentence = input.replace(',', ' ')
        .replace('.', ' ')
        .replace('!', ' ')
        .replace('?', ' ')
        .replace(';', ' ')
        .replace(':', ' ')
        .replace('\'', ' ')
        .replace('"', ' ')
        .replace('(', ' ')
        .replace(')', ' ');

    let words = cleanedSentence.split(' ');

    let filterWords = words.filter(word => word.length >= 3 && word.length <= 6);

    return filterWords;
}

// Sample input
// const input = "The quick brown ";

//My input:
const input = "This beautiful day will be remembered forever."

console.log(`Original string: ${input}`);

const result = wordsFn(input);
console.log(`Words of 3 to 6 characters length: ${result.join(' ')}`);
