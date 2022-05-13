function reverseInPlace(arr) {
    for (let frontIndex = 0; frontIndex < (arr.length) / 2; frontIndex++) {
        let backIndex = arr.length - frontIndex - 1

        let frontItem = arr[frontIndex]
        let backItem = arr[backIndex]

        arr[frontIndex] = backItem
        arr[backIndex] = frontItem
    }

    console.log(arr.join(" "));
}

// reverseInPlace(['a', 'b', 'c', 'd', 'e'])
// reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])
reverseInPlace(['33', '123', '0', 'dd'])