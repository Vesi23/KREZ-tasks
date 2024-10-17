const input = "9 5 7 4 2 1";

const sortNum = (input) => {
    const nums = input.split(' ').map(Number);

    nums.sort((a, b) => b - a);

    console.log("After sorting the said integers:");
    console.log(nums.join(' '));
}

sortNum(input);
