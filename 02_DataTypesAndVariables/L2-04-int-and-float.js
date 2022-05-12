function determineTypeOfNumber(n1, n2, n3) {
    let sum = n1 + n2 + n3
    sumAsInt = Math.round(sum)
    let type = (sum !== sumAsInt) ?
        'Float' : 'Integer'

    console.log(`${sum} - ${type}`);
}

determineTypeOfNumber(9, 100, 1.1)
determineTypeOfNumber(100, 200, 303)