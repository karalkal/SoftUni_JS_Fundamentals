function sumOddsEvens(number) {
    let oddSum = 0
    let evenSum = 0
    let numberAsStr = number.toString()

    for (let ch of numberAsStr) {
        let currentNumber = Number(ch)
        if (currentNumber % 2 === 0) evenSum += currentNumber;
        else oddSum += currentNumber;
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

sumOddsEvens(3495892137259234)