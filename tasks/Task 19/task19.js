const input = [10, 45, 25, 12, 24, 32, 5, 18];

const topThreeBuilding = (input) => {

    const sortedHeights = input.sort((a, b) => b - a);
    const topThree = sortedHeights.slice(0, 3);

    console.log('Heights of the top three buildings:');
    console.log(topThree.join('\n'));

}

topThreeBuilding(input);