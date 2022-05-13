function reverseItems(number, arr) {
    arr.splice(number)
    console.log(arr.reverse().join(" "));
}

reverseItems(3, [10, 20, 30, 40, 50])
reverseItems(4, [-1, 20, 99, 5])
reverseItems(2, [66, 43, 75, 89, 47])