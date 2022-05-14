function checkMatchingElements(arr1, arr2) {
    for (let el1 of arr1) {
        if (arr2.includes(el1)) {
            console.log(el1);
        }
    }
}


checkMatchingElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])
checkMatchingElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l'])