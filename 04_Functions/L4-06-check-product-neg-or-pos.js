// Write a function, that checks whether the result of the multiplication 
// numOne * numTwo * numThree is positive or negative. Try to do this WITHOUT multiplying the 3 numbers.

function solve(n1, n2, n3) {
    let result = ((n1 < 0 && n2 >= 0 && n3 >= 0)
        || (n2 < 0 && n1 >= 0 && n3 >= 0)
        || (n3 < 0 && n1 >= 0 && n2 >= 0)
        || (n1 < 0 && n2 < 0 && n3 < 0)) ?
        'Negative' : 'Positive'
    console.log(result);
}

solve(5, 12, -15)
solve(-6, -12, 14)
solve(-1, -2, -3)
solve(-5, 1, 1)
