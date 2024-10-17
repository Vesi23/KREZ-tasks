// For example:
// Sample Input 1:
// 1 = T(теста за разглеждане)
// 3 = N(бр. дни) 5 = M(бр. глави)
// 1 2 2 3 1 = Т[i](време за разглеждане на всяка глава)

// Sample Output 1:
// 4 (максимално време за разглеждане на глава на ден)

// Explanation of sample input 1:
// Day 1 : 1 , 2 Time required : 3
// Day 2 : 3 Time required : 2
// Day 3 : 4 , 5 Time required : 4

// Solution:
// Binary search algorithm is used to find the maximum time required to read a chapter in a day.

//How to solve the problem:
// left = N = 3  right = sum(T[i]) = 1+2+2+3+1 = 9
// mid = (left + right)/2 = 6
//  right = mid = 6 -> mid = (3 + 6) // 2 = 4 -> output = 4


const binarySearchFn = (times, maxTimePerDay, N) => {
    let daysNeeded = 1;
    let currentTime = 0;

    for (let time of times) { //time= 1, times = (5) [1, 2, 2, 3, 1]

        if (currentTime + time > maxTimePerDay) {
            daysNeeded++;
            currentTime = time;

            if (daysNeeded > N) {
                return false;
            }

        } else {
            currentTime += time;
        }
    }
    return true;
}

function minMaxTimePerDay(times, N) { //times = (5) [1, 2, 2, 3, 1]
    let left = Math.max(...times); //left = 3
    let right = times.reduce((a, b) => a + b, 0); // right = 9 

    let result = right; //result = right = 9

    while (left <= right) {
        let mid = Math.floor((left + right) / 2); //mid = (3+9)/2 = 6  //mid= (3+6)/2 = 4

        if (binarySearchFn(times, mid, N)) {
            result = mid; //result = mid = 6 (не) -> result = mid = 4 (да)
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result; //4
}

//Sample Input 1:
const input = ['1',
    '3 5',
    '1 2 2 3 1'
];

//Sample Output 2:
// const input = [
//     '1',
//     '4 7',
//     '2 2 3 3 4 4 1'
// ];
//output: 6

//my output-With 2 test cases
// const input = [
//     '2',
//     '4 6',
//     '3 1 4 1 5 9',
//     '3 4',
//     '2 7 1 8'
// ];

// my output-With 3 test case
// const input=[
// '3',
// '5 9',
// '2 5 3 3 4 4 1 2 3',
// '2 5',
// '2 1 3 3 4',
// '6 6',
// '1 2 1 3 1 1',
// ]

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let print = this.print || console.log;

const T = +gets(); //T = тестови случаи(1)

for (let i = 0; i < T; i++) {
    const [N, M] = gets().split(' ').map(Number); // N = брой дни(3), M = брой глави(5)
    const times = gets().split(' ').map(Number);  // times = (5) [1, 2, 2, 3, 1]-> време за разглеждане на всяка глава

    print(minMaxTimePerDay(times, N));
}
