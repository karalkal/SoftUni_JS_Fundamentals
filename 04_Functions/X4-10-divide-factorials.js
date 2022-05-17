function divideFactorials(n1, n2) {
    let firstFactorial = 1
    let secondFactorial = 1

    for (let i = 1; i <= n1; i++) {
        firstFactorial *= i
    }

    for (let j = 1; j <= n2; j++) {
        secondFactorial *= j
    }

    console.log((firstFactorial / secondFactorial).toFixed(2));
}

divideFactorials(5, 2)
divideFactorials(6, 2)