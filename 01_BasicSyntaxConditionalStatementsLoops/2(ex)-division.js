function checkLargestDivisor(number) {
    let divisors = [10, 7, 6, 3, 2];
    let result;

    for (let index = 0; index < divisors.length; index++) {
        const element = divisors[index];
        if (number % element == 0) {
            result = element;
            break;
        }
    }
    if (result) {
        console.log(`The number is divisible by ${result}`);
    }else{
        console.log('Not divisible')
    }
}

checkLargestDivisor(30)
checkLargestDivisor(15)
checkLargestDivisor(12)
checkLargestDivisor(1643)