function solve(number) {
    let completed = '%'.repeat(number / 10)
    let incomplete = '.'.repeat(10 - completed.length)

    let outcome = (incomplete.length === 0) ?
        '100% Complete!\n[%%%%%%%%%%]'
        : `${number}% [${completed}${incomplete}]\nStill loading...`

    // 50% [%%%%%.....]                   // 100% Complete!
    // Still loading...                   // [%%%%%%%%%%]

    console.log(outcome);
}

solve(40)
solve(100)