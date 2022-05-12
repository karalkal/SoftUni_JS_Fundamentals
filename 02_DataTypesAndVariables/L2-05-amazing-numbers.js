function sumContains9(number) {
    let sumOfNums = 0
    let numAsStr = number.toString()

    for (n of numAsStr) {
        sumOfNums += Number(n)
    }

    let isAmazing = (sumOfNums.toString().includes('9')) ?
        "True" : "False"

    console.log(`${numAsStr} Amazing? ${isAmazing}`);
}

sumContains9(1233)
sumContains9(99)