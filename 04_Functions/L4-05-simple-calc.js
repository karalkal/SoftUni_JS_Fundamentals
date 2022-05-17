function solve(numOne, numTwo, operator) {
    let result = 0
    switch (operator) {
        case ('add'):
            result = numOne + numTwo
            break
        case ('subtract'):
            result = numOne - numTwo
            break
        case ('multiply'):
            result = numOne * numTwo
            break
        case ('divide'):
            result = numOne / numTwo
    }
    console.log(result);
}

solve(5, 5, 'multiply')
solve(40, 8, 'divide')
solve(12, 19, 'add')
solve(50, 13, 'subtract')