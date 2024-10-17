const findDifference = (input) => {
    const nums = input.split('');

    const smallest = nums.slice().sort((a, b) => a - b);
    const largest = Number(nums.sort((a, b) => b - a).join(''));


    if (smallest[0] === '0') {
        for (let i = 1; i < smallest.length; i++) {
            if (smallest[i] !== '0') {

                [smallest[0], smallest[i]] = [smallest[i], smallest[0]];
                break;
            }
        }
    }

    const smallestNum = Number(smallest.join(''));
    const difference = largest - smallestNum;

    console.log("Difference between the largest integer and the smallest integer:");
    console.log(difference);
}

const result = () => {
    const testCases = 1;
    const inputs = ["34567829"];

    for (let i = 0; i < testCases; i++) {
        findDifference(inputs[i]);
    }
}

result();
// Difference between the largest integer and the smallest integer:
// 75308643