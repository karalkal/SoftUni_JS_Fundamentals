// A top integer is an integer, which is bigger than all the elements to its right. 

function findLargest(arr) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        let isLargest = true
        let number1 = arr[i]
        for (let j = i + 1; j <= arr.length; j++) {
            let number2 = arr[j]
            if (number1 <= number2) {
                isLargest = false;
                break;
            }
        }
        if (isLargest) {
            newArr.push(number1)
        }
    }
    console.log(newArr.join(' '));
}

findLargest([1, 4, 3, 2])
findLargest([14, 24, 3, 19, 15, 17])
findLargest([41, 41, 34, 20])
findLargest([27, 19, 42, 2, 13, 45, 48])
findLargest([13, 45, 48])
findLargest([42, 2, 13])