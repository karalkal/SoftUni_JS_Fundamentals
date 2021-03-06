// prints all unique pairs in an array of integers whose sum is equal to a given number

function solve(arr, number) {
    let arrOfValid = []
    let validPair = ""
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === number) {
                validPair = arr[i].toString() + ' ' + arr[j].toString()
                arrOfValid.push(validPair)
            }
        }
    }
    console.log(arrOfValid.join('\n'));
}

solve([1, 7, 6, 2, 19, 23], 8)
solve([14, 20, 60, 13, 7, 19, 8], 27)
solve([1, 2, 3, 4, 5, 6], 6)