const arr = [33, 34, 35, 39, 36, 37, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (arr[0] + arr[arr.length - 1])) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumber(arr)); // Output: 38