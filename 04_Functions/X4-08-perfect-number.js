// A perfect number is a positive integer that is equal to the sum of its proper positive divisors. 
// That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).

function findPerfectNumber(number) {
    let sumOfDivisors = 1

    for (let i = 2; i < number; i++) {
        if (number % i === 0) sumOfDivisors += i
    }

    let result = (sumOfDivisors === number) ?
        'We have a perfect number!' : 'It\'s not so perfect.'

    console.log(result);
}

// findPerfectNumber(6)
findPerfectNumber(66)
