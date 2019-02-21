// function maxNumbers(numbers) {
//     let i = 0;
//     let maxNum = 0; 
//     while (i < numbers.length) {
//         if (numbers[i] > maxNum) {
//             maxNum = numbers[i];
//         }
//         i++;
//     }
//     return maxNum;
// }

// // const findMaxNum = [10, 20, 30, 40, 50];
// // console.log(maxNumbers(findMaxNum));

// function minNumbers(numbers) {
//     let i = 1;
//     let minNum = numbers[0];
//     while (i < numbers.length) { 
//         // console.log(i);
//         if (numbers[i] < minNum) {
//             minNum = numbers[i];
//             // console.log(minNum);
//             // console.log(i);
//         }
//         i++;
//     }
//     return minNum;
// }

// // const findMinNum = [2, 4, 6, 8, 10];
// // console.log(minNumbers(findMinNum));

// function findAverage(numbers) {
//     let total = 0;
//     numbers.forEach(function(num) {
//         total += num;
//         // console.log(total);
//     });
//     return total / numbers.length;
// }

// // let test = [1,2,3,4,5];
// // console.log(findAverage(test));

// function repeat(fn, n) {
//     for(let i = 0; i < n; i++) {
//         fn();
//     }
// }

// function hello() {
//     console.log('Hello world');
// }

// function goodbye() {
//     console.log('Goodbye world');
// }

// // repeat(hello,5);
// // repeat(goodbye,5);

// function filter(arr, fn) { // arr=myNames, fn=checker
//     newArray = []; // ['Rich', 'Ray']
//     for(i=0; i<arr.length;i++) {
//         if (fn(arr[i]) === true) { // checker(myNames[3]), checker('Ray'), true because Ray[0] !== 'R', true=true
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// }

// // DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// // First we setup an array of strings we plan to filter:
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// // We use your `filter` function here, capturing a new array into `filteredNames`
// // comprised of names that only begin with 'R'
// const filteredNames = filter(myNames, function(name) {
//     // This is known as a "predicate function" - it's a function that 
//     // only returns a boolean
//     return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES

// // named function variant of line 79

// function checker(name) {
//     return name[0] === 'R'; // return the first letter of name and does it equal R?
// }

// const filteredNames2 = filter(myNames, checker);

// function hazardWarningCreator (typeOfWarning) {
//     let warningCounter = 0;
//     return function(location) {
//      warningCounter++;
//         console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}`);
//         console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`); 
//     }   
// }
// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// const weatherTrouble = hazardWarningCreator('Snow storm');
// const mudSlide = hazardWarningCreator('Mud Slide on the road');  

// // rocksWarning('Main St and Pacific Ave');
// // => DANGER There is a Rocks on the Road hazard at Main St and Pacific Ave
// // => The Rocks on the Road hazard has triggered 1 time(s) today!

// // rocksWarning('Centinela Ave and Olympic Blvd');
// // => DANGER There is a Rocks on the Road hazard at Centinela Ave and Olympic Blvd
// // => The Rocks on the Road hazard has triggered 2 time(s) today!

// // Invoke the other hazard creators you instantiated, too
// // weatherTrouble('10th and Piedmont');

let turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let backAndRight = turtleMovements.filter(movements => ((movements[0] >= 0) && (movements[1] >= 0)));
// console.log(backAndRight);

let totalMovement = backAndRight.map(x => {
    let sum = 0;
    sum += x[0]+x[1];
    return sum;
});
// console.log(totalMovement);

// let totalSteps = totalMovement.forEach(x => {
//     console.log(x);
// })

// reduce

let testInput = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'.split(' ')

let decode = testInput.reduce(function (acc, x) {
    if(x.length === 3) {
        return acc + ' ';
    } else {
        return acc + x[x.length-1];
    }
}, '');

console.log(decode)