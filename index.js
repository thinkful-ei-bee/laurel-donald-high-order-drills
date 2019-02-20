function maxNumbers(numbers) {
    let i = 0;
    let maxNum = 0; 
    while (i < numbers.length) {
        if (numbers[i] > maxNum) {
            maxNum = numbers[i];
        }
        i++;
    }
    return maxNum;
}

// const findMaxNum = [10, 20, 30, 40, 50];
// console.log(maxNumbers(findMaxNum));

function minNumbers(numbers) {
    let i = 1;
    let minNum = numbers[0];
    while (i < numbers.length) { 
        // console.log(i);
        if (numbers[i] < minNum) {
            minNum = numbers[i];
            // console.log(minNum);
            // console.log(i);
        }
        i++;
    }
    return minNum;
}

// const findMinNum = [2, 4, 6, 8, 10];
// console.log(minNumbers(findMinNum));

function findAverage(numbers) {
    let total = 0;
    numbers.forEach(function(num) {
        total += num;
        // console.log(total);
    });
    return total / numbers.length;
}

// let test = [1,2,3,4,5];
// console.log(findAverage(test));

function repeat(fn, n) {
    for(let i = 0; i < n; i++) {
        fn();
    }
}

function hello() {
    console.log('Hello world');
}

function goodbye() {
    console.log('Goodbye world');
}

// repeat(hello,5);
// repeat(goodbye,5);

function filter(arr, fn) { // arr=myNames, fn=checker
    newArray = []; // ['Rich', 'Ray']
    for(i=0; i<arr.length;i++) {
        if (fn(arr[i]) === true) { // checker(myNames[3]), checker('Ray'), true because Ray[0] !== 'R', true=true
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// named function variant of line 79

function checker(name) {
    return name[0] === 'R'; // return the first letter of name and does it equal R?
}

const filteredNames2 = filter(myNames, checker);