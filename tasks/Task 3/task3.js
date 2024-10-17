// Sample Input
let input = `2
1.0 0.0 3.0 2.0 2.0 2.0 0.0 0.0
4.0 3.0 10.0 7.0 14.0 5.0 8.0 10.0`;

const areParallel = (x1, y1, x2, y2, x3, y3, x4, y4) => {
    // Calculate the cross products
    let crossProduct1 = (y2 - y1) * (x4 - x3);
    let crossProduct2 = (y4 - y3) * (x2 - x1);

    // If cross products are equal, the lines are parallel
    return crossProduct1 === crossProduct2;
}

const processInput = (input) => {
    let lines = input.split('\n');
    let numTests = +lines[0];

    for (let i = 1; i <= numTests; i++) {
        let points = lines[i].split(' ').map(Number);

        let x1 = points[0], y1 = points[1], x2 = points[2], y2 = points[3];
        let x3 = points[4], y3 = points[5], x4 = points[6], y4 = points[7];

        if (areParallel(x1, y1, x2, y2, x3, y3, x4, y4)) {
            console.log(`PQ and RS are parallel.`);
        } else {
            console.log(`PQ and RS are not parallel.`);
        }
    }
}

// Process the input
processInput(input);
