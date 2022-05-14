// Write a function that determines if there exists an element in the array of numbers 
// such that the sum of the elements on its left is equal to the sum of the elements on its right. 

function findElement(arr) {
    let foundIndex = 'no'

    for (i = 0; i < arr.length; i++) {
        let leftSum = 0
        let rightSum = 0
        for (l = 0; l < i; l++) {
            leftSum += arr[l]
        }
        for (r = i + 1; r < arr.length; r++) {
            rightSum += arr[r]
        }
        if (leftSum === rightSum) {
            foundIndex = i
        }
    }
    console.log(foundIndex)
}

findElement([1, 2, 3, 3])
findElement([1, 2])
findElement([1])
findElement([1, 2, 3])
findElement([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])


