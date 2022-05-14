function compareSums(arr) {
    let sumOdds = 0
    let sumEvens = 0
    for (n of arr) {
        if (n % 2 === 0) {
            sumEvens += n
        } else {
            sumOdds += n
        }
    }
    console.log(sumEvens - sumOdds);
}

compareSums([1, 2, 3, 4, 5, 6])
compareSums([3, 5, 7, 9])
compareSums([2, 4, 6, 8, 10])