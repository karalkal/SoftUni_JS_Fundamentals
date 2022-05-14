function compareArrs(arr1, arr2) {
    let areIdentical = true;
    sumOfArr1 = 0
    let failedAtIndex = 0
    for (let n = 0; n < arr1.length; n++) {
        if (arr1[n] !== arr2[n]) {
            areIdentical = false
            failedAtIndex = n
            break
        }
        sumOfArr1 += Number(arr1[n])
    }
    if (areIdentical) {
        console.log(`Arrays are identical. Sum: ${sumOfArr1}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${failedAtIndex} index`)
    }
}

compareArrs(['10', '20', '30'], ['10', '20', '30'])
compareArrs(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
compareArrs(['1'], ['10'])