function sumDigits(number) {
    let total = 0
    for (let digitAsStr of number.toString()) {
        total += Number(digitAsStr)
    }
    console.log(total);
}

sumDigits(245678)