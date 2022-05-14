// • If the index of the element is even, add into the third array the sum of both elements at that index
// • If the index of the element is odd, add the concatenation of both elements at that index

function mergeArrays(arr1, arr2) {
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            newArr[i] = Number(arr1[i]) + Number(arr2[i])
        } else {
            newArr[i] = (arr1[i]) + (arr2[i])
        }
    }
    console.log(newArr.join(" - "));
}

mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44'])
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])