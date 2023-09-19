// Iterative solution to a fibonnaci sequence

function fibs(n) {
    let a = 0;
    let b = 1;
    let arr = [];

    if (n >= 1) arr.push(a);
    if (n >= 2) arr.push(b)

    for (let i = 3; i <= n; i++) {
        arr.push(a + b);
        a = arr[i - 2];
        b = arr[i - 1];
    }

    return arr;
}

console.log(fibs(10));