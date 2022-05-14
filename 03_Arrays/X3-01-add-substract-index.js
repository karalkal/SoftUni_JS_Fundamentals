// • If the number is even - add to its value its index position
// • If the number is odd - subtract to its value its index position

function addOrSubstr(arr) {
    let originalSum = 0
    let newSum = 0
    for (let n = 0; n < arr.length; n++) {
        originalSum += arr[n]

        if (arr[n] % 2 === 0) {
            arr[n] += n
        } else {
            arr[n] -= n
        }

        newSum += arr[n]

    }
    console.log(arr);
    console.log(originalSum);
    console.log(newSum);
}


addOrSubstr([5, 15, 23, 56, 35])