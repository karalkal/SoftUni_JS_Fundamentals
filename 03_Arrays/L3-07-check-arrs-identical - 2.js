function compareArrays(arr1, arr2) {
    let areIdentical = true;
    let differentIndex = -1;
    let total = 0
    for (let i = 0; i < arr1.length; i++) {
        total += Number(arr1[i])
        if (arr1[i] !== arr2[i]) {
            differentIndex = i;
            areIdentical = false
            break
        }
    }
    if (areIdentical) {
        console.log(`Arrays are identical. Sum: ${total}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${differentIndex} index`)
    }
}

compareArrays(['10', '20', '30'], ['10', '20', '30'])
compareArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
compareArrays(['1'], ['10'])