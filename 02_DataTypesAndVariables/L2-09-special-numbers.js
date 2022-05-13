function checkNumbersBelow(lastNumber) {
    for (let current = 1; current <= lastNumber; current++) {
        let currentSum = 0
        for (char of current.toString()) {
            currentSum += Number(char)
        }
        let isMagic =
            (currentSum === 5 ||
                currentSum === 7 ||
                currentSum === 11) ?
                'True' : 'False'
        console.log(`${current} -> ${isMagic}`);
    }
}

// checkNumbersBelow(15)
checkNumbersBelow(20)