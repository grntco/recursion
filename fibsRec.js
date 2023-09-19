function fibsRec(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(n);
        if (n < 2) {
            return n;
        } else {
            return fibsRec(n - 1) + fibsRec(n - 2);
        }
    }
    return arr;
}

console.log(fibsRec(8));