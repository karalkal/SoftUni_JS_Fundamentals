function printCharsBetween(ch1, ch2) {
    let start = ch1.charCodeAt() + 1
    let finish = ch2.charCodeAt()
    let result = []

    if (start > finish) {
        start = ch2.charCodeAt() + 1
        finish = ch1.charCodeAt();
    }

    for (let asciiNum = start; asciiNum < finish; asciiNum++) {
        result.push(String.fromCharCode(asciiNum))
    }

    console.log(result.join(' '));
}

printCharsBetween('z', 'a')