function condenseArr(arr) {

    while (arr.length > 1) {
        let newArr = []
        for (let i = 0; i < arr.length - 1; i++) {
            newArr[i] = arr[i] + arr[i + 1]
        }

        arr = newArr
    }
    console.log(arr.toString())

}


condenseArr([2, 10, 3])
condenseArr([5, 0, 4, 1, 2])
condenseArr([88])