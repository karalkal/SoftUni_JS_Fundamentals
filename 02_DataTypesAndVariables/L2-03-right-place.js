function replaceCharAndCompare(original, replacement, compareTo) {
    newStr = original.replace("_", replacement);
    if (newStr === compareTo) {
        console.log('Matched')
    } else {
        console.log('Not Matched');
    }
}

replaceCharAndCompare('Str_ng', 'I', 'Strong')
replaceCharAndCompare('Str_ng', 'i', 'String')
