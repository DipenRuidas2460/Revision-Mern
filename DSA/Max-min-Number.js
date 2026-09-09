const arr = [67, 5, 89, 23, 45, 12, 78, 90, 34, 56];

function findMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return { max, min };
}

console.log(findMaxMin(arr)); // Output: { max: 90, min: 5 }