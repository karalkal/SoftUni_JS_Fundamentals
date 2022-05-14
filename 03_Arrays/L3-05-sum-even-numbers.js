function sumEvens(arrOfStr) {
    let arrOfEvenNums = [];
    let sumOfEvens = 0
    for (n of arrOfStr) {
        let currentNum = Number(n)
        if (currentNum % 2 === 0) {
            sumOfEvens += currentNum
        }
    }
    console.log(sumOfEvens);
}

sumEvens(['1', '2', '3', '4', '5', '6'])
sumEvens(['3', '5', '7', '9'])
sumEvens(['2', '4', '6', '8', '10'])