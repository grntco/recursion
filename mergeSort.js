// A merge-sort algorithm using recursion

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let halfway = Math.floor(arr.length / 2);
    let left = arr.slice(0, halfway);
    let right = arr.slice(halfway);
    
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let merged = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            merged.push(left.shift());
        } else {
            merged.push(right.shift());
        }
    }

    while (left.length > 0) {
        merged.push(left[0]);
        left.shift();
    }

    while (right.length > 0) {
        merged.push(right[0]);
        right.shift();
    }

    return merged;
}

console.log(mergeSort([8, 3, 5, 10, 6, 2, 1, 7, 4, 9]));

// console.log(merge([10], [1]))