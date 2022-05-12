function printNumbersFromToAndSum(start, finish) {
    let currentNumber = start
    let sequenceOfNumbers = ""
    let total = 0
    for (currentNumber; currentNumber <= finish; currentNumber++) {
        total += currentNumber
        sequenceOfNumbers += currentNumber + " "
    }
    console.log(sequenceOfNumbers);
    console.log(`Sum: ${total}`);
}

printNumbersFromToAndSum(5, 10)
printNumbersFromToAndSum(0, 26)
printNumbersFromToAndSum(50, 60)