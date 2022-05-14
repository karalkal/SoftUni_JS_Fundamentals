// Depending on the number of rotations, the first element goes to the end.

function rotateArr(arr, rotations) {
    while (rotations > 0) {
        elementToMove = arr.shift()
        arr.push(elementToMove)
        rotations -= 1
    }
    console.log(arr.join(' '))
}

rotateArr([51, 47, 32, 61, 21], 2)
rotateArr([32, 21, 61, 1], 4)
rotateArr([2, 4, 15, 31], 5)