function solve(n1, n2, n3) {
    let sum = add(n1, n2)
    let result = subtract(sum, n3)
    console.log(result);


    function add(n1, n2) {
        return n1 + n2
    }

    function subtract(sum, n3) {
        return sum - n3
    }
}

solve(23, 6, 10)