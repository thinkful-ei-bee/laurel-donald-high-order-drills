function maxNumbers(numbers) {
    let i = 0;
    let maxNum = ''; 
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
    let i = 0;
    let minNum = '';
    while (i < numbers.length) {
        if (numbers[i] < minNum) {
            minNum = numbers[i];
        }
        i++;
    }
    return minNum;
}

const findMinNum = [2, 4, 6, 8, 10];
console.log(minNumbers(findMinNum));